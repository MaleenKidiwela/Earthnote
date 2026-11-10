#!/usr/bin/env bash
# Build the map and publish it (app and base-map bundle) to the gh-pages branch (GitHub Pages). The storm frames are
# not on Pages: they live in the R2 bucket (see earthnote_data.event.publish). The Pages checkout lives in data/site.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="$ROOT/data/site"
cd "$ROOT/web"
npm run build --silent
rsync -a --delete --exclude .git --exclude .nojekyll --exclude /events/ dist/ "$SITE/"
rm -rf "$SITE/events"
touch "$SITE/.nojekyll"
cd "$SITE"
git add -A
if git diff --cached --quiet; then echo "site already up to date"; exit 0; fi
git commit -q -m "${1:-Update the map}"
git push -q origin gh-pages
echo "published $(git rev-parse --short HEAD)"
