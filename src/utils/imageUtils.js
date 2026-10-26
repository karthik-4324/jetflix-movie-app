function getPosterUrl(posterPath) {
  if (!posterPath) {
    return null;
  }
  return "https://image.tmdb.org/t/p/w500" + posterPath;
}

function getBackdropUrl(backdropPath) {
  if (!backdropPath) return null;

  return "https://image.tmdb.org/t/p/original" + backdropPath;
}
export { getPosterUrl, getBackdropUrl };
