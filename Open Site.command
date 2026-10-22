#!/bin/zsh
# Double-click to run the site locally and open it in your browser.
# Pulls the latest edits saved from Pages CMS first, so you see current content.
# Close this Terminal window (or press Ctrl+C) to stop the server.
cd "$(dirname "$0")"
git pull --ff-only 2>/dev/null || echo "(could not pull latest from GitHub — showing local copy)"
[ -d node_modules ] || npm install
( sleep 3 && open "http://localhost:4321/" && open "http://localhost:4321/fr/" ) &
npm run dev
