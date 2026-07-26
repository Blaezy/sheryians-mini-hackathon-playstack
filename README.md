# PlayStack 🎮

A personal game library tracker — organize what you want to play, what you're playing, and what you've finished. Built for the Sheryians Coding School Mini Hackathon to learn Redux Toolkit.

**Live:** [sheryians-mini-hackathon-playstack-three.vercel.app](https://sheryians-mini-hackathon-playstack-three.vercel.app/)

---

## What it does

PlayStack lets you search real games (via the RAWG API), add them to one of three lists — **Want to Play**, **Playing**, or **Played** — and manage them from there:

- **Add** a game by searching RAWG's database of 350,000+ titles
- **Display** your games sorted into three columns, each showing a live count
- **Update** a game's status, rating, hours played, and tags at any time
- **Delete** a game from your library

Games marked as **Played** get extra fields: a 5-star rating, hours played, and tags like *Completed*, *100% Achieved*, or *Dropped Midway*.

---

## Why Redux Toolkit

This project exists to learn Redux Toolkit's core ideas hands-on:

- **`createSlice`** — one slice (`gameSlice`) holds every game in a single flat array, differentiated only by a `status` field (`want` / `playing` / `played`). Moving a game between lists is just updating one field, not shuffling data between three separate arrays.
- **Reducers as the only way to change state** — `addGame`, `updateGame`, `removeGame` are the sole entry points for modifying the games list. Every component that needs to change data dispatches one of these instead of mutating state directly.
- **`useSelector` for derived state** — column counts, filtered lists per status, and duplicate-detection are all computed on the fly from the single source of truth, not stored redundantly.
- **Immer under the hood** — reducers write mutation-style code (`game.status = newStatus`) that Redux Toolkit safely converts into immutable updates, without the manual spread-heavy boilerplate vanilla Redux requires.

A second slice (`searchSlice`) manages the RAWG search state (query, results, loading) separately from the games data, keeping the two concerns cleanly split.

---

## Tech stack

- **React** + **Vite**
- **Redux Toolkit** (`@reduxjs/toolkit`, `react-redux`)
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **RAWG Video Games Database API** for game search/data
- **Axios** for API requests
- **Lucide React** for icons

---

## Project structure

```
src/
  api/
    gameApi.js          # RAWG API fetch logic
  components/
    AddGame.jsx          # Add-game modal (search → select → details)
    SearchGameStep.jsx    # Phase 1: debounced game search
    GameDetailsStep.jsx   # Phase 2: status tabs + conditional fields
    EditGameDetails.jsx   # Edit modal for existing games
    GameCard.jsx           # Card for Want/Playing games
    GameColumn.jsx          # Maps games to GameCard
    PlayedGameCard.jsx      # Wider card with rating/hours/tags
    PlayedGameColumn.jsx     # Maps games to PlayedGameCard
    Navbar.jsx
  hook/
    useDebounce.js         # Debounce hook for search input
  layout/
    MainLayout.jsx          # Navbar + Outlet + modal state
  pages/
    MainPage.jsx             # 3-column board view
    WantPage.jsx              # Single "Want to Play" view
    PlayingPage.jsx            # Single "Playing" view
    PlayedPage.jsx               # Single "Played" view
  redux/
    features/
      gameSlice.js            # Games CRUD + localStorage persistence
      searchSlice.js            # Search query/results/loading state
    store.js
  routes/
    AppRoutes.jsx              # Route definitions
```

---

## Data flow

1. User opens the **Add Game** modal and types a search query
2. Input is debounced (700ms) before calling the RAWG API
3. Search results are dispatched into `searchSlice` and rendered as a dropdown
4. Selecting a game moves to the details step — pick a status (Want / Playing / Played)
5. If **Played** is selected, rating/hours/tags fields appear
6. Submitting dispatches `addGame`, which pushes the game into `gameSlice` and persists it to `localStorage`
7. Every page reads from the same Redux store via `useSelector`, filtered by status — so the game immediately appears in the right column, everywhere it's displayed

Editing works the same way in reverse: clicking the pencil icon on a card opens `EditGameDetails` pre-filled with that game's data, and saving dispatches `updateGame` with only the changed fields.

---

## Running locally

```bash
git clone https://github.com/Blaezy/sheryians-mini-hackathon-playstack.git
cd sheryians-mini-hackathon-playstack
npm install
```

Create a `.env` file in the project root:
```
VITE_RAWG_API_KEY=your_rawg_api_key_here
```

Get a free API key at [rawg.io/apidocs](https://rawg.io/apidocs).

```bash
npm run dev
```

---

## Challenges faced

- Understanding when to reach for Redux vs. local `useState` — modal steps and in-progress form data stayed local, while the actual games list needed to be global and shared
- Debouncing the search input to avoid firing an API call on every keystroke
- Filename casing (`gameCard.jsx` vs `GameCard.jsx`) worked fine locally but broke the Vercel build, since Linux filesystems are case-sensitive unlike Windows/Mac
- Handling client-side routing on Vercel — direct navigation to routes like `/playing` returned a 404 until adding a `vercel.json` rewrite rule

---

Built as part of the Sheryians Coding School Redux Toolkit Mini Hackathon.