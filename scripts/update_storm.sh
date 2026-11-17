#!/usr/bin/env bash
# Hourly (cron): update the site's views and send their frames to the R2 bucket the site reads.
#   continuum   the rolling view (last 7 days, 3 ahead); it also takes the hour's snapshot of the feeds that keep no
#               history and copies the recordings to the lab's S3 bucket
#   nov2026_ar  the Fall 2026 atmospheric-river event, from those recordings; it stops itself once frozen
# Log: data/storm_update.log. A lock per view makes an overlapping run of that view skip.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
{
  echo "=== $(date -u +%FT%TZ) continuum"
  EARTHNOTE_EVENT=continuum PYTHONPATH=src .venv/bin/python -m earthnote_data.event --publish --workers 16
  echo "=== $(date -u +%FT%TZ) nov2026_ar"
  EARTHNOTE_EVENT=nov2026_ar PYTHONPATH=src .venv/bin/python -m earthnote_data.event --publish --workers 16 --no-record
} >> "$ROOT/data/storm_update.log" 2>&1
