import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/moviesSlice";
import { saveWatchlist } from "../utils/storage";
import watchlistReducer from "../slices/watchlistSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchlist: watchlistReducer,
  },
});
store.subscribe(() => {
  const watchlist = store.getState().watchlist.movies;

  saveWatchlist(watchlist);
});

export default store;
