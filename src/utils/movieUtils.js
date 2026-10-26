function sortMovies(movies, sort) {
  if (sort === "rating-desc") {
    return [...movies].sort(
      (a, b) => b.vote_average - a.vote_average
    );
  }

  if (sort === "rating-asc") {
    return [...movies].sort(
      (a, b) => a.vote_average - b.vote_average
    );
  }

  return [...movies];
}

export { sortMovies };