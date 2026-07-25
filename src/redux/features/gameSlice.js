import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: JSON.parse(localStorage.getItem("games")) || [],
  },
  reducers: {
    addGame: (state, action) => {
      state.games.push(action.payload);
      localStorage.setItem("games",JSON.stringify(state.games))
    },
    moveGame: (state, action) => {
      const game = state.games.find((game) => game.id === action.payload.id);
      if (game) {
        game.status = action.payload.newStatus;
      }
    },
    updateGame: (state, action) => {
      const game = state.games.find((game) => game.id === action.payload.id);
      if (game) {
        Object.assign(game, action.payload.updates);
      }
    },
    removeGame: (state, action) => {
      state.games = state.games.filter((game) => game.id !== action.payload);
    },
  },
});

export const { addGame, moveGame, updateGame, removeGame } = gameSlice.actions;
export default gameSlice.reducer;
