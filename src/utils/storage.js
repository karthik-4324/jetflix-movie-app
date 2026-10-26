const WATCHLIST_KEY = "cine-movie-watchlist";

function getWatchlist() {
  const savedMovies = localStorage.getItem(WATCHLIST_KEY);

  if (!savedMovies) {
    return [];
  }

  try {
    return JSON.parse(savedMovies);
  } catch {
    return [];
  }
}

function saveWatchlist(movies) {
  localStorage.setItem(
    WATCHLIST_KEY,
    JSON.stringify(movies)
  );
}

export { getWatchlist, saveWatchlist };