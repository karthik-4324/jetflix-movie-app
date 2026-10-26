import { getPosterUrl } from "../utils/imageUtils";
import { Card, CardMedia, Typography, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../slices/watchlistSlice";

import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import { useState } from "react";
export function MovieCard({ movie }) {
  const url = getPosterUrl(movie.poster_path);

  const [expand, setExpand] = useState(false);

  const shortenview = movie.overview.slice(0, 60);

  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.movies);

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        position: "relative",
        overflow: "visible",
        transition: "transform 0.3s ease",
        borderRadius: 2,
        "&:hover": {
          transform: "scale(1.05)",
          zIndex: 20,
        },
        "&:hover .movie_overlay": {
          opacity: 1,
          transform: "scale(1)",
        },
      }}
    >
      <IconButton
        onClick={() => {
          {
            isInWatchlist
              ? dispatch(removeFromWatchlist(movie.id))
              : dispatch(addToWatchlist(movie));
          }
        }}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 30,
        }}
      >
        <FavoriteIcon sx={{ color: isInWatchlist ? "red" : "white" }} />
      </IconButton>

      {url ? (
        <Box
          sx={{ position: "relative" }}
          onClick={() => {
            navigate(`/movie/${movie.id}`);
          }}
        >
          <CardMedia
            component="img"
            src={url}
            sx={{
              objectFit: "cover",
              borderRadius: 2,
              aspectRatio: "2 / 3",
              width: "100%",
            }}
          />
          <Box
            className="movie_overlay"
            sx={{
              position: "absolute",
              cursor: "pointer",
              left: "-15%",
              top: "-15%",
              right: "-15%",
              bottom: "-15%",
              borderRadius: 2,

              zIndex: 10,

              overflow: "hidden",

              backgroundColor: "#050912",
              opacity: 0,

              transform: "scale(0.8)",
              transition: "opacity 0.3s ease, transform 0.3s ease",

              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: 1.5,
              gap: 1,
              color: "white",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "55%",
                borderRadius: 2,
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <CardMedia
                component="img"
                src={url}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              {movie.title}
            </Typography>

            <Chip
              label={`⭐ ${movie.vote_average.toFixed(1)}`}
              size="small"
              sx={{
                width: "fit-content",
                color: "white",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />
            <Box
              sx={{
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.5,
                maxHeight: "80px",
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <Typography
                component="span"
                variant="body2"
                sx={{
                  display: "inline",
                  lineHeight: 1.5,
                }}
              >
                {expand ? movie.overview : shortenview}
              </Typography>

              {!expand && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setExpand(true);
                  }}
                  style={{
                    display: "inline",
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    padding: 0,
                    marginLeft: "3px",
                    fontSize: "16px",
                  }}
                >
                  ...
                </button>
              )}

              {expand && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setExpand(false);
                  }}
                  style={{
                    display: "block",
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    padding: 0,
                    marginTop: "4px",
                  }}
                >
                  View less
                </button>
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <p>No poster available</p>
      )}
    </Card>
  );
}
