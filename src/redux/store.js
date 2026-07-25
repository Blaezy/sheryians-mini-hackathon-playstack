import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice.js";
import gameReducer from "./features/gameSlice.js";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    game: gameReducer,
  },
});
