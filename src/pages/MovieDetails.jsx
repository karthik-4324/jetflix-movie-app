import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits } from "../services/tmdbAPI.js";
import { getBackdropUrl, getPosterUrl } from "../utils/imageUtils";
import { Box, Typography, Chip } from "@mui/material";
import { CastList } from "../components/CastList";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(id);
      setMovie(data);

      const credits = await getMovieCredits(id);
      setCast(credits.cast);
    }

    loadMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path);
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <Box
      sx={{
        backgroundColor: "#050912",
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          minHeight: "80vh",
          backgroundColor: "#050912",
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* Movie information */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            color: "white",
            padding: { xs: 3, md: 6 },
            display: "flex",
            gap: 4,
            alignItems: "flex-end",
          }}
        >
          {posterUrl && (
            <Box
              component="img"
              src={posterUrl}
              sx={{
                width: { xs: "140px", md: "220px" },
                borderRadius: 2,
                boxShadow: 6,
              }}
            />
          )}

          <Box sx={{ maxWidth: "800px" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
              }}
            >
              {movie.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {movie.overview}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                mb: 2,
              }}
            >
              <Chip
                label={`⭐ ${movie.vote_average.toFixed(1)}`}
                sx={{ color: "white" }}
              />

              <Chip label={movie.release_date} sx={{ color: "white" }} />

              <Chip label={`${movie.runtime} min`} sx={{ color: "white" }} />
            </Box>

            <Typography variant="body2">
              Genres: {movie.genres.map((genre) => genre.name).join(", ")}
            </Typography>
          </Box>
        </Box>
      </Box>

      <CastList cast={cast} />
    </Box>
  );
}

export default MovieDetails;
