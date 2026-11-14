"""Ferry disruptions: cancelled, delayed and out-of-service sailings on the Washington State and BC Ferries routes,
recorded each hour.

    WSF alerts          recorded with the roads (roads.py) from Nov 10 03:20Z; the alerts still posted then are
                        placed back to their publication times
    BC Ferries          its service notices (list page and each notice), from Nov 14; the site keeps no history
    News reports        ferry_news.json: BC Ferries disruptions in the window before recording began, from news
                        articles (each with its source); sailing times as reported

Every notice is read for what it says happened (cancelled, out of service, delayed, at risk, resuming) and why
(weather, tide, mechanical, crew, emergency); notices that are not disruptions (reservations, terminal works, lifts,
planned maintenance) are left out. Routes are drawn from OpenStreetMap ferry ways (ferry_routes.json, © OpenStreetMap
contributors, ODbL).

Written under the event's folder: ferries/routes.json, and ferries/k###.json, the notices in effect during hour k.
"""
from __future__ import annotations

import gzip
import html
import json
import re
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

from . import roads as RD
from .paths import ROOT

ARCHIVE = ROOT / "data" / "archive" / "bcferries"
HERE = Path(__file__).parent
ROUTES = json.loads((HERE / "ferry_routes.json").read_text())
NEWS = HERE / "ferry_news.json"
PT = ZoneInfo("America/Los_Angeles")
UA = {"User-Agent": "Mozilla/5.0 (earthnote storm recorder)"}
BCF = "https://www.bcferries.com/current-conditions/service-notices"
CREDITS = ("Ferries: Washington State Ferries alerts and BC Ferries service notices, recorded hourly; BC Ferries before Nov 14 "
           "from news reports (sources in each notice); routes © OpenStreetMap contributors")
STATUSES = ("cancelled", "out of service", "at risk", "delayed", "resuming")
# WSF route ids in AffectedRouteIDs; the San Juan Islands' inter-island legs are drawn with route 9
WSF_ROUTE = {**{i: f"wsf:{i}" for i in (1, 3, 5, 6, 7, 8, 9, 13, 14, 15)}, **{i: "wsf:9" for i in (20, 21, 22, 23, 27, 28, 272)}}

_NOT = re.compile(r"tidal|reservation|\bADA\b|elevator|construction|project|program|regular schedule|holiday|e-?mail|terminal closures|"
                  r"replaced .* as vessel|bridge closure|lane closure|scheduled maintenance|modified schedule|temporary schedule|"
                  r"dock fit|overhead loading|vehicle restriction|berth closure|life extension|fares?\b", re.I)
_STATUS = (("at risk", re.compile(r"at risk|may (be cancel|go out of service|not sail)", re.I)),
           ("resuming", re.compile(r"resum|return(ed)? to service|attempt to return|back on schedule", re.I)),
           ("out of service", re.compile(r"out of service|tie up early", re.I)),
           ("cancelled", re.compile(r"cancel|will not sail|not sailing", re.I)),
           ("delayed", re.compile(r"delay|behind schedule|\blate\b", re.I)))
_CAUSE = (("weather", re.compile(r"\bwind(s|y)?\b|weather|rough|\bseas\b|\bwaves?\b|storm|swell", re.I)),
          ("tide", re.compile(r"tid(al|e)", re.I)),
          ("mechanical", re.compile(r"mechanic|repair|generator|engine|propulsion", re.I)),
          ("crew", re.compile(r"crew|staff", re.I)),
          ("emergency", re.compile(r"emergency|rescue|medical", re.I)))


def classify(title: str, text: str = "") -> tuple[str, str | None] | None:
    """(status, cause) of a notice, or None when it is not a disruption (or a planned one: tidal cancellations,
    maintenance). The title decides the status; the cause may be in either."""
    if _NOT.search(title) or _NOT.search(text[:120]):
        return None
    status = next((s for s, rx in _STATUS if rx.search(title)), None) or next((s for s, rx in _STATUS if rx.search(text)), None)
    if not status:
        return None
    said = " ".join(re.findall(r"(?:due to|because of|for)\s([^.]{0,80})", f"{title}. {text}", re.I))   # the stated reason first
    return status, next((c for part in (said, f"{title} {text}") for c, rx in _CAUSE if rx.search(part)), None)


def bcf_route(name: str) -> str | None:
    """A BC Ferries route ('Vancouver (Tsawwassen) - Victoria (Swartz Bay)') as a drawn route's id, or None."""
    for r in ROUTES:
        if r["op"] == "bcf" and r["match"] and all(m.lower() in name.lower() for m in r["match"]):
            return r["id"]
    return None


def _lines(page: str) -> list[str]:
    page = re.sub(r"<script.*?</script>|<style.*?</style>", " ", page, flags=re.S)
    page = html.unescape(re.sub(r"<[^>]+>", "\n", page)).replace("\xa0", " ")
    return [x.strip() for x in page.splitlines() if x.strip()]


def parse_list(page: str) -> list[dict]:
    """The service notices page: [{code, sub, region, title, route}] (a notice is listed once per route)."""
    out, region = [], None
    for m in re.finditer(r'<h3 class="service-region"[^>]*>([^<]+)</h3>|<a href="\?serviceNoticeCode=(\d+)&(?:amp;)?subscriptionRoute=([A-Z-]+)">\s*([^<]+)</a>', page):
        if m.group(1):
            region = html.unescape(m.group(1)).strip()
            continue
        title, _, route = html.unescape(m.group(4)).strip().rpartition("\xa0-\xa0")   # the route's own dashes are plain
        out.append({"code": m.group(2), "sub": m.group(3), "region": region, "title": title.replace("\xa0", " ").strip(),
                    "route": route.replace("\xa0", " ").strip()})
    return out


def parse_notice(page: str) -> dict:
    """A notice's page: {posted (date, 'Saturday, November 14, 2026'), reissued ('7:25 am' or None), text}."""
    ls = _lines(page)
    i = next((i for i, x in enumerate(ls) if x.startswith("Service notice - ")), None)
    if i is None:
        return {"posted": None, "reissued": None, "text": ""}
    body = ls[i + 1:]
    end = next((j for j, x in enumerate(body) if x.startswith("Subscribe to service notices")), len(body))
    body = body[:end]
    posted = body[1] if len(body) > 1 and body[0] == "Posted:" else None
    reissued = next((m.group(1) for x in body[:4] for m in [re.match(r"Re-Issued:\s*(.+)", x)] if m), None)
    text = " ".join(x for x in body[2:] if not x.startswith("Re-Issued:"))
    return {"posted": posted, "reissued": reissued, "text": re.split(r" For up-to-date sailing", text)[0][:600]}


def _get(url: str) -> str:
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read().decode("utf-8", "replace")


def record(now: datetime, log=print) -> dict:
    """Fetch BC Ferries' notices now and archive them (the site holds only what is posted now)."""
    failed, notices, ok = [], [], False
    try:
        listed = parse_list(_get(BCF))
        pages = {}
        for n in listed:
            if n["code"] not in pages:
                try:
                    pages[n["code"]] = parse_notice(_get(f"{BCF}?serviceNoticeCode={n['code']}"))
                except Exception as e:
                    failed.append(f"notice {n['code']} ({e.__class__.__name__})")
                    pages[n["code"]] = {"posted": None, "reissued": None, "text": ""}
            notices.append({**n, **pages[n["code"]]})
        ok = True
    except Exception as e:
        failed.append(f"bcferries ({e.__class__.__name__})")
    ARCHIVE.mkdir(parents=True, exist_ok=True)
    with gzip.open(ARCHIVE / f"{now.strftime('%Y%m%d%H%M')}.json.gz", "wt") as f:
        json.dump({"time": now.isoformat(), "ok": ok, "notices": notices, "failed": failed}, f)
    n = sum(bool(classify(x["title"], x["text"])) for x in notices)
    log(f"ferries: {len(notices)} BC Ferries notices, {n} disruptions" + (f"; failed: {', '.join(failed)}" if failed else ""))
    return {"notices": notices, "failed": failed}


def _posted_ms(n: dict, seen: int) -> int:
    """When a BC Ferries notice was posted: its re-issue time on its posting date, else when first recorded if that
    was the same day, else the start of the posting day (Pacific)."""
    try:
        day = datetime.strptime(n["posted"], "%A, %B %d, %Y").replace(tzinfo=PT)
    except (TypeError, ValueError):
        return seen
    if n.get("reissued"):
        try:
            t = datetime.strptime(n["reissued"].replace(".", "").upper(), "%I:%M %p")
            return int(day.replace(hour=t.hour, minute=t.minute).timestamp() * 1000)
        except ValueError:
            pass
    first = datetime.fromtimestamp(seen / 1000, PT)
    return seen if first.date() == day.date() else int(day.timestamp() * 1000)


def _item(src, routes, name, title, text, posted, cause_status, url=None) -> dict:
    status, cause = cause_status
    return {"src": src, "routes": routes, "name": name, "status": status, "cause": cause, "title": title[:200], "text": text[:600],
            "posted": posted, **({"url": url} if url else {})}


def frames(start: datetime, hours: int) -> dict[int, dict]:
    """Each hour of the window: the disruptions in effect, from the newest snapshot in the hour of each recorded
    source, and the news reports whose span overlaps it. Only notices posted during the window are shown. Hours before
    WSF recording began are rebuilt from the first snapshot (notices placed back to their publication: `partial`)."""
    t0 = int(start.timestamp() * 1000)
    names = {r["id"]: r["name"] for r in ROUTES}
    k_of = lambda t: int((t - start).total_seconds() // 3600)
    wsf = {}
    for t, snap in RD.archived():
        if 0 <= k_of(t) < hours:
            wsf[k_of(t)] = snap["ferries"]
    bcf, seen = {}, {}
    for p in sorted(ARCHIVE.glob("*.json.gz")):
        with gzip.open(p, "rt") as f:
            d = json.load(f)
        t = datetime.fromisoformat(d["time"])
        for n in d["notices"]:
            seen.setdefault(n["code"], int(t.timestamp() * 1000))
        if 0 <= k_of(t) < hours and d.get("ok"):   # the list page was read
            bcf[k_of(t)] = d["notices"]
    news = json.loads(NEWS.read_text()) if NEWS.exists() else []
    first_wsf = min(wsf, default=None)
    out = {}
    for k in range(hours):
        a, b = t0 + k * 3600_000, t0 + (k + 1) * 3600_000
        partial = first_wsf is not None and k < first_wsf
        items = []
        for f in wsf.get(k) or (wsf[first_wsf] if partial else []):
            c = classify(f["title"], f["text"])
            if c and f["published"] and t0 <= f["published"] < b:
                routes = sorted({WSF_ROUTE[i] for i in f["routes"] if i in WSF_ROUTE})
                name = " · ".join(names[r] for r in routes) if 0 < len(routes) <= 3 else f["title"].split(" - ")[0]
                items.append(_item("wsf", routes, name, f["title"], f["text"], f["published"], c))
        for n in bcf.get(k, []):
            c = classify(n["title"], n["text"])
            posted = _posted_ms(n, seen[n["code"]])
            if c and t0 <= posted < b:
                route = bcf_route(n["route"])
                items.append(_item("bcf", [route] if route else [], names.get(route) or n["route"], n["title"], n["text"], posted, c,
                                   f"{BCF}?serviceNoticeCode={n['code']}"))
        for r in news:
            s_, e_ = RD._ms(r["from"]), RD._ms(r["to"])
            if s_ < b and e_ > a:
                items.append(_item("news", [r["route"]], names[r["route"]], r["title"], r["text"], s_, (r["status"], r["cause"]), r["url"])
                             | {"outlet": r["outlet"]})
        if not items and k not in wsf and k not in bcf and not partial:
            continue
        rank = {s: i for i, s in enumerate(STATUSES)}
        items.sort(key=lambda x: (rank[x["status"]], -x["posted"]))
        out[k] = {"time": datetime.fromtimestamp(b / 1000, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "items": items,
                  "counts": {s: len({r for x in items if x["status"] == s for r in x["routes"] or [x["name"]]}) for s in STATUSES},
                  **({"partial": True} if partial else {})}
    return out


def routes() -> list[dict]:
    """The drawn routes: [{id, op, name, lines: [[[lon, lat], ...], ...]}]."""
    return [{k: r[k] for k in ("id", "op", "name", "lines")} for r in ROUTES]
