#!/usr/bin/env bash
# After an hourly publish: watch the GitHub Pages deployment of the pushed commit and re-run it if it fails (Pages
# sometimes times out "syncing_files"), up to twice. Stops early once a newer commit has been pushed.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GH=${GH:-/home/seismic/anaconda3/bin/gh}
REPO=MaleenKidiwela/Earthnote
SHA=$(git -C "$ROOT/data/site" rev-parse HEAD)
tries=0
for _ in $(seq 60); do
  sleep 30
  [ "$(git -C "$ROOT/data/site" rev-parse HEAD)" = "$SHA" ] || exit 0
  read -r id status concl < <("$GH" run list -R "$REPO" -w pages-build-deployment -L 10 \
      --json databaseId,headSha,status,conclusion \
      -q ".[] | select(.headSha == \"$SHA\") | \"\(.databaseId) \(.status) \(.conclusion)\"" | head -1)
  [ -n "${id:-}" ] || continue
  [ "$status" = completed ] || continue
  [ "$concl" = success ] && exit 0
  [ $tries -ge 2 ] && { echo "pages: deploy of ${SHA:0:7} still failing after $tries retries"; exit 1; }
  tries=$((tries + 1))
  echo "pages: deploy of ${SHA:0:7} ended '$concl'; retry $tries"
  "$GH" run rerun "$id" -R "$REPO"
done
