import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies } from "../slices/moviesSlice";

function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    const timer = setTimeout(() => {
      dispatch(fetchMovies({ query: query.trim(), page: 1 }));
      navigate("/");
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <TextField
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search movies..."
      size="small"
      sx={{
        width: { xs: "180px", md: "330px" },

        "& .MuiOutlinedInput-root": {
          color: "white",
          backgroundColor: "#111827",
          borderRadius: "30px",

          "& fieldset": {
            border: "none",
          },

          "&:hover fieldset": {
            border: "none",
          },

          "&.Mui-focused fieldset": {
            border: "1px solid rgba(255,255,255,0.15)",
          },
        },

        "& .MuiInputBase-input::placeholder": {
          color: "rgba(255,255,255,0.55)",
          opacity: 1,
        },
      }}
    />
  );
}

export default SearchBar;
