#!/usr/bin/env bash
# Hourly (cron): fetch new observed hours and forecast runs, then send the frames to the R2 bucket the site reads.
# Log: data/storm_update.log. A lock in event.py makes an overlapping run skip.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
{
  echo "=== $(date -u +%FT%TZ)"
  PYTHONPATH=src .venv/bin/python -m earthnote_data.event --publish --workers 16
} >> "$ROOT/data/storm_update.log" 2>&1
