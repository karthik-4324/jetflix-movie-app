import { Pagination as MuiPagination } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../slices/moviesSlice";

export function Pagination() {
  const dispatch = useDispatch();

  const { page, totalPages, query } = useSelector((state) => state.movies);

  const handlePageChange = (event, newPage) => {
    dispatch(
      fetchMovies({
        query,
        page: newPage,
      }),
    );
  };

  if (!query || totalPages === 0) {
    return null;
  }

  return (
    <MuiPagination
      count={totalPages}
      page={page}
      onChange={handlePageChange}
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        mb: 4,

        "& .MuiPaginationItem-root": {
          color: "white",
        },

        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "white",
          color: "black",
        },

        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "rgba(255,255,255,0.15)",
        },
      }}
    />
  );
}
