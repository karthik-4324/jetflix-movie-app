import { createSlice } from "@reduxjs/toolkit";
import { getWatchlist } from "../utils/storage";

const initialState = {
  movies: getWatchlist(),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.movies.push(action.payload);
    },

    removeFromWatchlist: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload,
      );
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;

export default watchlistSlice.reducer;
