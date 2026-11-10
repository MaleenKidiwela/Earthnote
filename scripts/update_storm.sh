#!/usr/bin/env bash
# Hourly (cron): fetch new observed hours and forecast runs, then publish the frames to GitHub Pages.
# Log: data/storm_update.log. A lock in event.py makes an overlapping run skip.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
{
  echo "=== $(date -u +%FT%TZ)"
  PYTHONPATH=src .venv/bin/python -m earthnote_data.event --publish --workers 16
} >> "$ROOT/data/storm_update.log" 2>&1
# a Pages deployment that times out is re-run (in the background; the next hour's run does not wait for it)
nohup "$ROOT/scripts/pages_retry.sh" >> "$ROOT/data/storm_update.log" 2>&1 &
