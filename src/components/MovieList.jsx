import { MovieCard } from "./MovieCard";
import { Grid } from "@mui/material";

export function MovieList({ movies }) {
  return (
    <Grid container spacing={4}>
      {movies.map((movie) => {
        return (
          <Grid key={movie.id} size={{ xs: 6, sm: 4, md: 2 }}>
            <MovieCard movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
}
