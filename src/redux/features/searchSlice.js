import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
    loading: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.loading = false;
    },
    setLoading: (state,action) => {
      state.loading = action.payload;
    },
  },
});

export const { setQuery, setResults, setLoading } = searchSlice.actions;
export default searchSlice.reducer;
