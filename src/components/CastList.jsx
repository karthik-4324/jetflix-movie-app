import { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CastCard } from "./CastCard";

export function CastList({ cast }) {
  const castContainerRef = useRef(null);

  const scrollCast = (direction) => {
    if (!castContainerRef.current) return;

    castContainerRef.current.scrollBy({
      left: direction * castContainerRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        px: { xs: 3, md: 6 },
        pt: 2,
        pb: 4,
      }}
    >
      {/* Heading + arrows */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Cast
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            onClick={() => scrollCast(-1)}
            sx={{
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 1.5,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.18)",
              },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={() => scrollCast(1)}
            sx={{
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: 1.5,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.18)",
              },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Cast cards */}
      <Box
        ref={castContainerRef}
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          pb: 2,

          // Hide scrollbar
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {cast.map((actor) => (
          <Box key={actor.id} sx={{ flexShrink: 0 }}>
            <CastCard actor={actor} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
