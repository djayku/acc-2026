# Tokyo App v4 — Findings

## UX patterns
- Bottom tabs > screen modals for daily-use apps (less thumb travel, faster context switch)
- Drop-down sheets work well for detail views (e.g., venue info, journal entry)
- Single-page with tabs is faster than multi-page on mobile

## Design patterns (ui-skills to consult)
- Editorial/concierge apps: serif display + sans body, generous whitespace, muted gold accent
- Dark mode: better for travel (battery saving on OLED, easier on eyes at night)
- Map integration: secondary view, not primary

## Tech stack decisions
- Pure static HTML/CSS/JS (no build step) → PWA on GitHub Pages
- Single-file approach if possible → faster initial load, easier to maintain
- Service worker for offline (Tokyo data may be limited when traveling)

## Data sources
- Weather: Open-Meteo (free, no key) ✓
- FX: ExchangeRate-API (free, no key) ✓
- Time: client-side JS for Tokyo timezone
- Tokyo locations: hardcoded in venues.json (current static data)
