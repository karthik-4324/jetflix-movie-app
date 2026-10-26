import { MovieList } from "../components/MovieList";
import { Box } from "@mui/material";
import { Loading } from "../components/Loading.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { SortMovies } from "../components/SortMovies";
import { useDispatch } from "react-redux";
import { sortMovies } from "../utils/movieUtils";
import { useSelector } from "react-redux";
import { setSort } from "../slices/moviesSlice";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const query = useSelector((state) => state.movies.query);
  const sort = useSelector((state) => state.movies.sort);

  const sortedMovies = sortMovies(movies, sort);
  return (
    <Box
      sx={{
        paddingTop: 3,
        paddingLeft: 3,
        paddingRight: 3,
        background: "#050912",
      }}
    >
      {loading ? (
        <Loading />
      ) : query === "" ? (
        <Box
          component="img"
          src="/images/Cine_Image.png"
          sx={{
            width: "100%",
            display: "block",
          }}
        />
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 3,
            }}
          >
            <SortMovies
              sort={sort}
              setSort={(value) => dispatch(setSort(value))}
            />
          </Box>

          <MovieList movies={sortedMovies} />

          <Pagination />
        </>
      )}
    </Box>
  );
}
export default Home;
