# Tokyo App v4 — Task Plan

## Goal
Recreate Jay's Tokyo ACC 2026 itinerary app from scratch using new skills (planning-with-files, ui-skills, avoid-ai-writing, meticulous). Single-page PWA with bottom tabs + dropdown sheets, no full-screen modals. Live data wired (weather, FX, time). Editorial Aman-inspired visual style.

## Phases

### Phase 1: Design system foundation
- [x] Choose design language (editorial concierge, dark + warm linen)
- [ ] Pick typography (Cormorant Garamond display + Inter body)
- [ ] Pick color palette (charcoal + warm linen + gold accent)
- [ ] Define spacing/radius scale (Aman: zero border-radius)
- [x] Get ui-skills recommendation for mobile-first editorial app

### Phase 2: Data layer
- [x] Pull live Tokyo weather (Open-Meteo)
- [x] Pull JPY/HKD FX
- [x] Compile venue list (hotels, restaurants, transit, parks)
- [x] Schedule (3 days of events)

### Phase 3: Component architecture
- [ ] Bottom tab bar (5 tabs: Plan / Places / Weather / Map / Notes)
- [ ] Day accordion (collapsible day-by-day)
- [ ] Venue card (dropdown sheet on tap)
- [ ] Weather widget (live, 5-day forecast)
- [ ] FX widget
- [ ] Time widget (Tokyo time)
- [ ] Notes/journal (localStorage)

### Phase 4: Page assembly
- [ ] Plan tab (schedule + day accordion)
- [ ] Places tab (categories + search + filter)
- [ ] Weather tab (full forecast)
- [ ] Map tab (Leaflet)
- [ ] Notes tab (journal)
- [ ] Dropdown sheets (venue details, concierge notes, settings)

### Phase 5: Visual polish
- [ ] Editorial typography
- [ ] Status badges (In flight / Hotel / Dinner / On stage)
- [ ] Day dividers (Roman numerals)
- [ ] Live data widgets in header

### Phase 6: Deploy
- [x] Update index.html to point to v4
- [x] .nojekyll + PWA manifest
- [x] Git commit + push to djayku/tokyo-trip-2026
- [x] Send updated GitHub URL to Jay

## Errors
| Error | Attempt | Resolution |
|-------|---------|------------|
| | | |

## Decisions
- v4: Drop modals, use dropdown sheets (per Jay's request)
- v4: Bottom tabs are the primary navigation
- v4: Live data is core (weather, FX, time) not just static
- v4: PWA over native (consistent with previous versions)
