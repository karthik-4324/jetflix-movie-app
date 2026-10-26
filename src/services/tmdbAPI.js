import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

async function searchMovies(query, page) {
  const response = await tmdbApi.get("/search/movie", {
    params: {
      query: query,
      page: page,
    },
  });

  return response.data;
}

async function getMovieDetails(id) {
  const response = await tmdbApi.get(`/movie/${id}`);

  return response.data;
}

async function getMovieCredits(id) {
  const response = await tmdbApi.get(`/movie/${id}/credits`);
  return response.data;
}

export { searchMovies, getMovieDetails, getMovieCredits };
