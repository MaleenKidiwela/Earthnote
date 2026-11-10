#!/usr/bin/env bash
# Build the map and publish it (app, base-map bundle and storm frames) to the gh-pages branch (GitHub Pages).
# The Pages checkout lives in data/site; frames and tiles are only ever added or replaced, so a plain push suffices.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="$ROOT/data/site"
cd "$ROOT/web"
npm run build --silent
rsync -a --delete --exclude .git --exclude .nojekyll dist/ "$SITE/"
touch "$SITE/.nojekyll"
cd "$SITE"
git add -A
if git diff --cached --quiet; then echo "site already up to date"; exit 0; fi
git commit -q -m "${1:-Update the map}"
git push -q origin gh-pages
echo "published $(git rev-parse --short HEAD)"
