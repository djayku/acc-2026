# Tokyo App v4 — Progress Log

## Session 1: 2026-10-12 (completed)
- Installed: planning-with-files, ui-skills-root, avoid-ai-writing, meticulous-cli, hindsight
- v4 requirements: bottom tabs, dropdown sheets, no full-screen modals, live data wired
- Consulted ui-skills protocol: picked zeke/swiss-design + pbakaus/typeset
- Built v4 with editorial concierge aesthetic + Swiss grid

## Design choices
- Layout: Single-page app, 5 bottom tabs (Plan, Places, Weather, Map, Notes)
- Theme: Editorial concierge (charcoal + warm linen + gold accent) + Swiss grid discipline
- Typography: Cormorant Garamond (display, serif italic) + Inter (body, sans)
- Radius: 0 throughout (sharp rectangular, no rounded corners)
- Color: charcoal (#1c1916), linen (#f3eee7), gold (#a4894f), accent red (#8b2c2c)
- Interactions: Bottom sheets (dropdown), not modals. Swipe-down to close.

## Tech decisions
- Pure static HTML + CSS + JS, no build step (31KB)
- Open-Meteo for weather (no key, free)
- ExchangeRate-API for FX (no key, free)
- Leaflet for map (CDN)
- localStorage for journal + state

## Build steps
- [x] Phase 1: Design system (Swiss + editorial)
- [x] Phase 2: Data layer (12 venues, 36 schedule items)
- [x] Phase 3: Components (5 tabs + bottom sheets)
- [x] Phase 4: Page assembly
- [x] Phase 5: Visual polish
- [x] Phase 6: Deploy

## Build output
- File size: 31KB (single HTML, inline CSS+JS)
- Live at: https://djayku.github.io/tokyo-trip-2026/app.html
- GitHub commit: 0d6529baff56

## Errors
| Error | Attempt | Resolution |
|-------|---------|------------|
| PyUnicode error in venue list | 1 | Fixed missing quote in 4th venue |
| Stale GitHub Pages cache | 1 | Verified via raw.githubusercontent.com — propagated within 30s |

## What's working
- Bottom tabs (5): Plan, Places, Weather, Map, Notes
- Live data: Tokyo time, weather (Open-Meteo), FX (JPY/HKD)
- 12 venues, 36 schedule items
- 3-day itinerary with day dividers (I, II, III Roman numerals)
- Concierge copy on every item
- "You are on stage" highlight for your co-facilitating sessions
- Check marks persist via localStorage
- Notes journal auto-saves
- Live Tokyo time in header
- Trip status countdown

## Session 2: 2026-10-12 (v5 patches)
- Fixed: FX now shows HKD AND USD pairs (4 cells in 2x2 grid)
- Fixed: Map tab now has English labels (CartoDB Voyager tiles) + GPS locate button
- Fixed: Map tab no longer blocks bottom nav (z-index 9999, flex layout, no 100vh trap)
- Added: Locate me, Fit all toolbar buttons
- Pushed to GitHub as v5
