import numpy as np
import pytest

from earthnote_data import layers, region as R, terrain


def test_parse_esri_ascii_and_sample():
    text = "ncols 3\nnrows 2\nxllcorner -122.0\nyllcorner 46.0\ncellsize 0.5\nnodata_value -99999\n0 10 20\n100 110 120\n"
    g = terrain.parse_esri_ascii(text)
    assert g.values.shape == (2, 3) and g.north == 47.0
    # row 0 is the north row; cell centres sit half a cell in
    assert g.sample(np.array([-121.75]), np.array([46.75]))[0] == 0
    assert g.sample(np.array([-121.5]), np.array([46.5]))[0] == 55   # midway between 0, 10, 100 and 110


def test_lattice_sampler_hits_nodes():
    ncols, nrows = 5, 4
    lat = np.arange(ncols * nrows, dtype=np.float32).reshape(nrows, ncols)
    s = terrain.lattice_sampler(lat)
    lon = R.WEST + 2 / R.PER_DEG
    la = R.NORTH - 1 / R.PER_DEG
    assert s(np.array([lon]), np.array([la]))[0] == pytest.approx(lat[1, 2])


def test_lattice_tiles_share_edges():
    ncols, nrows = R.lattice_shape()
    assert (ncols - 1) % R.OVERVIEW_STEP == 0 and (nrows - 1) % R.OVERVIEW_STEP == 0
    assert R.PER_DEG % (2 * R.OVERVIEW_STEP) == 0   # overview nodes (and every second one) fall on tile edges


def test_simplify_keeps_corners_and_drops_collinear_points():
    pts = np.array([[0, 0], [1, 0.001], [2, 0], [2, 1], [2, 2]], float)
    out = layers.simplify(pts, 0.04)
    assert out.tolist() == [[0, 0], [2, 0], [2, 2]]


def test_segments_are_densified_pairs():
    lon0, lat0 = -122.0, 47.0
    run = [(lon0, lat0), (lon0 + 0.02, lat0)]   # ~1.5 km
    segs = layers.segments([run], lambda lon, lat: np.full(np.shape(lon), 100.0))
    assert segs.shape[1] == 6 and len(segs) >= 5
    assert np.allclose(segs[:-1, 3:], segs[1:, :3])   # each segment starts where the last ended
    assert np.all(segs[:, 1] == 100)


def test_real_water_drops_dry_covered_and_treatment_water():
    from earthnote_data.water import real_water
    assert real_water({"natural": "water", "water": "lake"})
    assert real_water({"natural": "water", "water": "river"})
    assert not real_water({"natural": "water", "intermittent": "yes"})
    assert not real_water({"landuse": "reservoir", "covered": "yes"})
    assert not real_water({"natural": "water", "water": "wastewater"})
    assert not real_water({"natural": "water", "location": "underground"})


def test_flow_bytes_round_trip_within_a_step():
    from earthnote_data.rivers import decode_flow, encode_flow
    q = np.array([0.0, 0.5, 12.0, 340.0, 9000.0, np.nan])
    b = encode_flow(q)
    assert b[-1] == 255 and b[0] == 0
    back = decode_flow(b)
    assert np.all(np.abs(back[1:5] / q[1:5] - 1) < 0.06)   # 40 steps per decade: within 6%


def test_gauge_archive_merges_observations_and_keeps_each_forecast(tmp_path, monkeypatch):
    import gzip, json
    from earthnote_data import rivers
    monkeypatch.setattr(rivers, "GAUGE_ARCHIVE", tmp_path)
    obs = lambda rows: {"primaryUnits": "ft", "secondaryUnits": "kcfs", "data": rows}
    row = lambda t, v, g=None: {"validTime": t, "primary": v, "secondary": -999, **({"generatedTime": g} if g else {})}
    rivers.archive_gauge("X1", {"observed": obs([row("T1", 1.0), row("T2", 2.0)]), "forecast": obs([row("T9", 9.0, "G1")])})
    rivers.archive_gauge("X1", {"observed": obs([row("T2", 2.5), row("T3", 3.0)]), "forecast": obs([row("T9", 8.0, "G2")])})
    rec = json.loads(gzip.decompress((tmp_path / "X1.json.gz").read_bytes()))
    assert {t: v[0] for t, v in rec["obs"].items()} == {"T1": 1.0, "T2": 2.5, "T3": 3.0}   # kept, revised, added
    assert sorted(rec["fc"]) == ["G1", "G2"]


def test_sscofs_nowcast_file_for_an_hour():
    from datetime import datetime, timezone
    from earthnote_data.ocean import nowcast_url
    at = lambda *a: nowcast_url(datetime(*a, tzinfo=timezone.utc))
    assert at(2026, 11, 9, 3).endswith("2026/11/09/sscofs.t03z.20261109.fields.n006.nc")
    assert at(2026, 11, 9, 4).endswith("2026/11/09/sscofs.t09z.20261109.fields.n001.nc")
    assert at(2026, 11, 9, 22).endswith("2026/11/10/sscofs.t03z.20261110.fields.n001.nc")   # the next day's first run


def test_power_outages_normalise():
    from datetime import datetime, timezone
    from earthnote_data import power as PW
    now = datetime(2026, 11, 9, 23, 50, tzinfo=timezone.utc)
    raw = {
        "bch": [{"id": 1, "latitude": 49.2, "longitude": -123.1, "numCustomersOut": 40, "dateOff": 1794263990000, "cause": "Tree"}],
        "pse": {"PseMap": [{"DataProvider": {"PointOfInterest": {"Latitude": "47.7", "Longitude": "-122.5", "Id": "INC1", "PlannedOutage": False},
                                             "Attributes": [{"RefName": "StartDate", "Value": "11/07 08:25 PM"}, {"RefName": "Customers impacted", "Value": "516"}]}}]},
        "pac_or": {"outages": [{"longitude": -122.4, "latitude": 42.1, "custOut": 7, "reported": "01:01 PM on 11/09", "icon": "planned"}]},
    }
    out = {o["u"]: o for o in PW.normalise(raw, now)}
    assert out["bch"]["n"] == 40 and out["pse"]["n"] == 516 and out["pac"]["planned"]
    # local Pacific times without a year: 11/07 8:25 PM PST = 11/08 04:25 UTC
    assert out["pse"]["start"] == int(datetime(2026, 11, 8, 4, 25, tzinfo=timezone.utc).timestamp() * 1000)
    assert out["pac"]["start"] == int(datetime(2026, 11, 9, 21, 1, tzinfo=timezone.utc).timestamp() * 1000)


def test_road_events_normalise():
    from earthnote_data import roads as RD
    loc = {"Latitude": 47.4, "Longitude": -121.4, "RoadName": "090"}
    raw = {
        "alerts": [{"AlertID": 1, "EventCategory": "Closure", "HeadlineDescription": "I-90 closed both directions at Snoqualmie Pass", "Priority": "Highest",
                    "StartRoadwayLocation": loc, "EndRoadwayLocation": loc, "StartTime": "/Date(1794313800000-0800)/"},
                   {"AlertID": 2, "EventCategory": "Construction", "HeadlineDescription": "Lane closure near 85th Street", "Priority": "Low",
                    "StartRoadwayLocation": loc, "EndRoadwayLocation": {}},
                   {"AlertID": 3, "EventCategory": "Maintenance", "HeadlineDescription": "Crews clearing a mudslide; one lane open", "Priority": "High",
                    "StartRoadwayLocation": loc, "EndRoadwayLocation": {}}],
        "drivebc": [{"id": "drivebc.ca/1", "event_type": "INCIDENT", "event_subtypes": ["HAZARD"], "severity": "MAJOR",
                     "description": "Flooding at McKay Road. Closed. Last update: today", "roads": [{"name": "Other Roads", "state": "CLOSED"}],
                     "geography": {"type": "Point", "coordinates": [-122.1, 52.2]}, "schedule": {"intervals": ["2026-11-10T03:20/"]}},
                    {"id": "drivebc.ca/2", "event_type": "ROAD_CONDITION", "event_subtypes": ["HAZARD"], "severity": "MINOR",
                     "description": "Slippery sections between West Avalanche Gate and Creston", "roads": [],
                     "geography": {"type": "LineString", "coordinates": [[-117, 49], [-116.9, 49.1]]}}],
        "passes": [{"MountainPassId": 8, "MountainPassName": "Mt. Baker Hwy SR 542", "RestrictionOne": {"RestrictionText": "Pass Closed"}}],
    }
    out = RD.normalise(raw)
    kinds = {e["id"]: e["kind"] for e in out["events"]}
    assert kinds == {"1": "closure", "2": "planned", "3": "hazard", "drivebc.ca/1": "closure", "drivebc.ca/2": "surface"}
    ev = {e["id"]: e for e in out["events"]}
    assert ev["1"]["road"] == "SR 090" and ev["1"]["sev"] == 3 and ev["1"]["start"] == 1794313800000
    assert ev["drivebc.ca/1"]["title"] == "Flooding at McKay Road. Closed."   # the update boilerplate is dropped
    assert ev["drivebc.ca/1"]["start"] == 1794280800000                      # Open511 schedule times are UTC (11-10 03:20Z)
    assert ev["drivebc.ca/2"]["lat2"] == 49.1 and out["passes"][0]["closed"]


def test_road_frames_show_each_report_from_its_own_time(tmp_path, monkeypatch):
    import gzip, json
    from datetime import datetime, timezone
    from earthnote_data import roads as RD
    monkeypatch.setattr(RD, "ARCHIVE", tmp_path)
    loc = {"Latitude": 47.4, "Longitude": -121.4, "RoadName": "165"}
    alert = lambda i, ms: {"AlertID": i, "EventCategory": "Closure", "HeadlineDescription": "SR 165 closed at the bridge",
                           "Priority": "Highest", "StartRoadwayLocation": loc, "EndRoadwayLocation": {}, "StartTime": f"/Date({ms}-0800)/"}
    pass_ = lambda i, name, text, ms: {"MountainPassId": i, "MountainPassName": name, "RestrictionOne": {"RestrictionText": text},
                                       "Latitude": 47.4, "Longitude": -121.4, "DateUpdated": f"/Date({ms}-0800)/"}
    for t, updated in (("202611100320", 1793123321227), ("202611100420", 1794284000000)):   # weather update bumps the report time
        raw = {"alerts": [alert(1, 1744834200000), alert(2, 1794280000000), alert(3, 1794139200000)],   # Apr 2025, Nov 10 03:06Z, Nov 8 12Z
               "passes": [pass_(8, "Mt. Baker Hwy SR 542", "Pass Closed", updated), pass_(9, "Stevens Pass US 2", "No restrictions", 1794218400000),
                          pass_(10, "Satus Pass US 97", "No restrictions", 1792392747723)],   # Nov 9 10Z; Oct 2026
               "wsf": [{"BulletinID": 1, "AlertFullTitle": "Fauntleroy delays", "PublishDate": "/Date(1794218400000-0800)/"},
                       {"BulletinID": 2, "AlertFullTitle": "Winter schedule", "PublishDate": "/Date(1792392747723-0800)/"}]}
        with gzip.open(tmp_path / f"{t}.json.gz", "wt") as f:
            json.dump({"time": datetime.strptime(t, "%Y%m%d%H%M").replace(tzinfo=timezone.utc).isoformat(), "raw": raw}, f)
    fr = RD.frames(datetime(2026, 11, 7, 8, tzinfo=timezone.utc), 216, (-130, -110, 40, 55))
    assert sorted(fr) == list(range(69)) and fr[66]["partial"] and "partial" not in fr[67]
    kinds = lambda k: sorted(r[5] for r in fr[k]["out"] if r[5] != "earlier")   # what is drawn
    assert kinds(27) == [] and kinds(28) == ["closure"] and kinds(66) == ["closure"]   # the Nov 8 closure from its start
    assert kinds(67) == ["closure", "closure"] and fr[68]["counts"]["earlier"] == 1
    shown = lambda k: [p["name"] for p in fr[k]["passes"] if not p["earlier"]]
    assert shown(49) == [] and shown(50) == shown(68) == ["Stevens Pass US 2"]   # from its report; Satus (Oct) and Mt. Baker (closed Oct 28) never
    assert fr[68]["passes"][0]["closed_since"] == 1793123321227
    assert [f["title"] for f in fr[50]["ferries"]] == ["Fauntleroy delays"] and fr[49]["ferries"] == []


def test_sewer_overflows_normalise():
    from datetime import datetime, timezone
    from earthnote_data import sewers as SW
    now = datetime(2026, 11, 10, 3, 30, tzinfo=timezone.utc)
    ms = int(now.timestamp() * 1000)
    raw = {"kc": "CSO_TagName,X_COORD,Y_COORD,Name,DSN,DateTime,Status\n"
                 "CSO_Status1,-120.0,47.66,Dummy1,DSN,11/09/2026 19:20,CurrentlyOverflowing\n"
                 "BALL,-122.38,47.66,King County CSO: Ballard,3,11/09/2026 19:20,OverflowLast48hrs\n"
                 "S152,-122.35,47.65,Seattle CSO,152,11/09/2026 19:20,CurrentlyOverflowing\n",
           "mv_cso": {"features": [{"attributes": {"OBJECTID": 1, "FacilityID": 7, "Name": "Clark Drive #1", "IncidentStartDate": ms - 3600e3, "IncidentEndDate": None},
                                    "geometry": {"x": -123.08, "y": 49.28}},
                                   {"attributes": {"OBJECTID": 2, "FacilityID": 8, "Name": "Heather Street", "IncidentStartDate": ms - 50 * 3600e3, "IncidentEndDate": ms - 49 * 3600e3},
                                    "geometry": {"x": -123.12, "y": 49.27}}]}}
    out = {o["name"]: o for o in SW.normalise(raw, now)}
    assert set(out) == {"Ballard", "Seattle CSO (outfall 152)", "Clark Drive #1", "Heather Street"}   # no legend dummies
    assert out["Ballard"]["state"] == "none" and out["Seattle CSO (outfall 152)"]["owner"] == "Seattle"   # "last 48 h" has no time
    assert out["Clark Drive #1"]["state"] == "overflowing" and out["Heather Street"]["state"] == "none"


def test_sewer_frames_show_only_overflows_during_each_hour(tmp_path, monkeypatch):
    import gzip, json
    from datetime import datetime, timezone
    from earthnote_data import sewers as SW
    monkeypatch.setattr(SW, "ARCHIVE", tmp_path)
    head = "CSO_TagName,Name,DSN,X_COORD,Y_COORD,Status\n"
    kc = lambda a, b: head + f"A,King County CSO: Montlake,1,-122.3,47.6,{a}\nB,King County CSO: Kingdome,2,-122.3,47.6,{b}\n"
    feat = lambda i, name, s0, e: {"attributes": {"Name": name, "OBJECTID": i, "FacilityID": i, "IncidentStartDate": s0, "IncidentEndDate": e},
                                   "geometry": {"x": -123.07, "y": 49.27}}
    # Clark Drive: from Nov 10 02:30Z (before recording), still running at 03:26, over at 03:30
    snaps = (("202611100326", kc("OverflowLast48hrs", "CurrentlyOverflowing"), [feat(1, "Clark Drive #1", 1794277800000, None)]),
             ("202611100425", kc("OverflowLast48hrs", "NoRecentOverflow"), [feat(1, "Clark Drive #1", 1794277800000, 1794281400000),
                                                                             feat(2, "Westridge", 1794000000000, 1794003600000)]))
    for t, k_, m in snaps:
        with gzip.open(tmp_path / f"{t}.json.gz", "wt") as f:
            json.dump({"time": datetime.strptime(t, "%Y%m%d%H%M").replace(tzinfo=timezone.utc).isoformat(),
                       "raw": {"kc": k_, "mv_cso": {"features": m}, "mv_sso": {"features": []}}}, f)
    fr = SW.frames(datetime(2026, 11, 7, 8, tzinfo=timezone.utc), 216)
    state = lambda k: {r[3]: r[5] for r in fr[k]["out"]}
    assert sorted(fr) == list(range(69)) and fr[30]["partial"] and fr[30]["out"] == []   # empty hours still have a frame
    assert state(66) == {"Clark Drive #1": "overflowing"}   # 02:00-03:00Z, before recording: rebuilt
    assert state(67) == {"Montlake": "none", "Kingdome": "overflowing", "Clark Drive #1": "overflowing", "Westridge": "none"}
    assert state(68)["Kingdome"] == "none" and state(68)["Clark Drive #1"] == "none" and "recent" not in fr[68]["counts"]
    assert state(65) == {}   # Westridge (Nov 6) began before the storm


def test_ferry_notices_classified():
    from earthnote_data import ferries as FY
    c = FY.classify
    assert c("PT/Coup - Cancelled sailings due to high winds and rough seas") == ("cancelled", "weather")
    assert c("Sailing Delay", "departed 69 minutes behind schedule due to a mechanical issue. Arrive in the check-in window") == ("delayed", "mechanical")
    assert c("PD/Tah - Route may go out of service after the Tah 7:00pm Sailing", "due to a shortage of crew") == ("at risk", "crew")
    assert c("PT/Coup - Update - Kennewick out of service, due to high winds") == ("out of service", "weather")
    assert c("Faunt/Va/SW - #1 Kittitas to resume service with 210p Faunt Departure") == ("resuming", None)
    for planned in ("PT/Coup - Tidal Cancellations for Monday, November 9", "Winter vehicle reservations release is tomorrow",
                    "Muk/Clin - ADA Alert - #2 end elevator on the Suquamish is unavailable"):
        assert c(planned) is None
    assert c("Sailing Cancellations – November 18", "Sailing Cancellations – Scheduled Maintenance Little River") is None
    assert FY.bcf_route("Vancouver (Tsawwassen) - Victoria (Swartz Bay)") == "bcf:TSA-SWB"
    assert FY.bcf_route("Victoria (Swartz Bay) - Southern Gulf Islands") == "bcf:SWB-SGI"


def test_bc_ferries_pages_parsed():
    from earthnote_data import ferries as FY
    page = ('<h3 class="service-region" id="Vancouver Island">Metro Vancouver - Vancouver Island</h3><hr/>'
            '<a href="?serviceNoticeCode=88041&subscriptionRoute=HSB-DEP">\n   Sailing Delay&nbsp;-&nbsp;Vancouver (Horseshoe Bay) - Nanaimo (Departure Bay)</a>')
    assert FY.parse_list(page) == [{"code": "88041", "sub": "HSB-DEP", "region": "Metro Vancouver - Vancouver Island", "title": "Sailing Delay",
                                    "route": "Vancouver (Horseshoe Bay) - Nanaimo (Departure Bay)"}]
    n = FY.parse_notice("<p>Service notices</p><h1>Service notice&nbsp;-&nbsp;Sailing Delay</h1><p>Posted:</p><p>Saturday, November 14, 2026</p>"
                        "<p>Re-Issued: 7:25 am</p><p>Our 6:15 am sailing departed late.</p><p>For up-to-date sailing and departure information</p>"
                        "<b>Subscribe to service notices</b>")
    assert n == {"posted": "Saturday, November 14, 2026", "reissued": "7:25 am", "text": "Our 6:15 am sailing departed late."}
    assert FY._posted_ms(n, 0) == 1794669900000   # 7:25 am PST


def test_ferry_frames(tmp_path, monkeypatch):
    import gzip, json
    from datetime import datetime, timezone
    from earthnote_data import ferries as FY, roads as RD
    t = lambda s: datetime.fromisoformat(s).replace(tzinfo=timezone.utc)
    ms = lambda s: int(t(s).timestamp() * 1000)
    alert = lambda i, title, pub, routes: {"id": i, "title": title, "text": "", "routes": routes, "published": ms(pub)}
    monkeypatch.setattr(RD, "archived", lambda: [
        (t("2026-11-10T03:20"), {"ferries": [alert(1, "PT/Coup - Cancelled sailings due to high winds", "2026-11-10T01:10", [8]),
                                              alert(2, "Faunt/Va/SW - Kittitas out of service due to mechanical issue", "2026-11-06T10:00", [13, 14, 15])]}),
        (t("2026-11-10T04:25"), {"ferries": [alert(3, "PT/Coup - Route resumes service", "2026-11-10T04:00", [8])]})])
    monkeypatch.setattr(FY, "ARCHIVE", tmp_path)
    monkeypatch.setattr(FY, "NEWS", tmp_path / "news.json")
    (tmp_path / "news.json").write_text(json.dumps([{"route": "bcf:TSA-SWB", "status": "cancelled", "cause": "weather", "from": "2026-11-07T12:37:00-08:00",
                                                    "to": "2026-11-07T22:35:00-08:00", "title": "7 and 9 p.m. cancelled", "text": "", "outlet": "Victoria News", "url": "u"}]))
    with gzip.open(tmp_path / "202611100430.json.gz", "wt") as f:
        json.dump({"time": "2026-11-10T04:30:00+00:00", "ok": True, "notices": [
            {"code": "9", "title": "Sailing Delay", "route": "Vancouver (Tsawwassen) - Victoria (Swartz Bay)", "text": "due to high winds",
             "posted": "Monday, November 09, 2026", "reissued": "8:05 pm"}]}, f)
    fr = FY.frames(t("2026-11-07T08:00"), 240)
    what = lambda k: [(i["src"], i["routes"], i["status"]) for i in fr[k]["items"]]
    assert what(12) == [("news", ["bcf:TSA-SWB"], "cancelled")] and fr[12]["partial"]   # Nov 7 20:00Z, from the report at 12:37 PST
    assert what(10) == [] and 23 in fr and what(23) == []   # before the report; after the last crossing
    assert what(65) == [("wsf", ["wsf:8"], "cancelled")]   # 01:10Z, rebuilt from the first snapshot; the Kittitas alert is from before the storm
    assert what(68) == [("bcf", ["bcf:TSA-SWB"], "delayed"), ("wsf", ["wsf:8"], "resuming")]
    assert fr[68]["counts"]["delayed"] == 1 and fr[68]["items"][0]["url"].endswith("serviceNoticeCode=9")


def test_rolling_window():
    from datetime import datetime, timezone
    from earthnote_data import event as E
    now = datetime(2026, 11, 30, 21, 40, tzinfo=timezone.utc)   # Mon Nov 30, 1:40 PM PST
    ev = E._window(E.EVENTS["continuum"], now)
    assert ev["first"] == (29 * 24 + 13) - 7 * 24   # 7 days before the current hour (13Z), from Nov 1 08Z
    end = ev["start"].timestamp() + ev["hours"] * 3600
    assert end == datetime(2026, 12, 4, 8, tzinfo=timezone.utc).timestamp()   # Thu Dec 4 00:00 PST: the first midnight 72 h out
    assert ev["runs_from"] == datetime(2026, 11, 29, 18, tzinfo=timezone.utc)
    fixed = E._window(E.EVENTS["nov2026_ar"], now)
    assert fixed["first"] == 0 and fixed["hours"] == 240 and fixed["runs_from"] == datetime(2026, 11, 6, tzinfo=timezone.utc)


def test_station_series_kept_once_per_folder(tmp_path, monkeypatch):
    import gzip
    from earthnote_data import event as E
    monkeypatch.setattr(E, "OUT", tmp_path / "out"); monkeypatch.setattr(E, "STATIONS", tmp_path / "stations")
    (tmp_path / "out" / "sea").mkdir(parents=True)
    (tmp_path / "out" / "sea" / "tides.json").write_text('{"sites": [1]}')
    E.keep_station_series("20261117", log=lambda *_: None)
    (tmp_path / "out" / "sea" / "tides.json").write_text('{"sites": [2]}')
    E.keep_station_series("20261117", log=lambda *_: None)   # the day's copy is kept as first saved
    assert gzip.decompress((tmp_path / "stations" / "20261117" / "tides.json.gz").read_bytes()) == b'{"sites": [1]}'
    assert not (tmp_path / "stations" / "20261117" / "snow.json.gz").exists()   # missing (a failed fetch): left for a later run that day


def test_feed_pages_stripped():
    from earthnote_data import feeds as FD
    page = '<html><head><style>.a{}</style><script>var x=1;</script></head><body><!-- c --><p>Sailings cancelled</p><svg><path/></svg></body></html>'
    assert FD.strip_page(page) == "<html><head></head><body><p>Sailings cancelled</p></body></html>"
