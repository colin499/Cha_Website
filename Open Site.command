#!/bin/zsh
# Double-click to run the site locally and open it in your browser.
# Close this Terminal window (or press Ctrl+C) to stop the server.
cd "$(dirname "$0")"
[ -d node_modules ] || npm install
( sleep 3 && open "http://localhost:4321/" && open "http://localhost:4321/fr/" ) &
npm run dev
