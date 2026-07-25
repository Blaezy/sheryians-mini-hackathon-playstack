import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [
      {
        id: 51325,
        name: "The Last of Us Part II",
        image: "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
        year: 2020,
        status: "want",
        rating: null,
        hours: null,
        tags: [],
        notes: "",
      },
      {
        id: 799265,
        name: "The Last of Us Part I",
        image: "https://media.rawg.io/media/games/71d/71df9e759b2246f9769126c98ac997fc.jpg",
        year: 2022,
        status: "want",
        rating: null,
        hours: null,
        tags: [],
        notes: "",
      },
      {
        id: 42393,
        name: "The Last of Us: Left Behind",
        image: "https://media.rawg.io/media/games/e0d/e0da9a0e997d062fbfce98a4a59fc86e.jpg",
        year: 2014,
        status: "played",
        rating: 4,
        hours: 3,
        tags: ["Completed"],
        notes: "",
      },
      {
        id: 3990,
        name: "The Last Of Us",
        image: "https://media.rawg.io/media/games/a5a/a5a7fb8d9cb8063a8b42ee002b410db6.jpg",
        year: 2013,
        status: "played",
        rating: 5,
        hours: 15,
        tags: ["Completed", "100% Achieved"],
        notes: "",
      },
      {
        id: 356714,
        name: "Among Us",
        image: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
        year: 2018,
        status: "playing",
        rating: null,
        hours: 6,
        tags: [],
        notes: "",
      },
    ],
  },
  reducers: {
    addGame: (state, action) => {
      state.games.push({
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        year: action.payload.year,
        status: "want",
        rating: null,
        hours: null,
        tags: [],
        notes: "",
      });
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
