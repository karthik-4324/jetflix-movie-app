import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies } from "../services/tmdbAPI";

const initialState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 0,
  query: "",
  sort: "",
};
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ query, page }) => {
    const data = await searchMovies(query, page);
    return {
      ...data,
      query,
    };
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;

      state.movies = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.query = action.payload.query;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default moviesSlice.reducer;
export const { setSort } = moviesSlice.actions;
