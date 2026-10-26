import { useSelector } from "react-redux";
import { MovieList } from "../components/MovieList";
import { Box, Typography } from "@mui/material";

function Watchlist() {
  const movies = useSelector((state) => state.watchlist.movies);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 90px)",

        background:
          movies.length === 0
            ? "#050912"
            : "radial-gradient(circle at top right, #2a0b3d 0%, #12091f 35%, #050912 75%)",
      }}
    >
      {movies.length === 0 ? (
        <Box
          sx={{
            width: "100%",
            minHeight: "calc(100vh - 90px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="public/images/Cine_WatchList_bg.png"
            alt="Empty watchlist"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            pt: 3,
            px: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            My Watchlist
          </Typography>

          <MovieList movies={movies} />
        </Box>
      )}
    </Box>
  );
}

export default Watchlist;
