import { Card, CardMedia, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export function CastCard({ actor }) {
  return (
    <Box sx={{ flexShrink: 0 }}>
      <Card
        sx={{
          width: "185px",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {actor.profile_path ? (
          <CardMedia
            component="img"
            src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
            sx={{
              width: "100%",
              aspectRatio: "2 / 3",
              objectFit: "cover",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              aspectRatio: "2 / 3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#2a2d32",
            }}
          >
            <PersonIcon
              sx={{
                fontSize: 70,
                color: "rgba(255,255,255,0.35)",
              }}
            />
          </Box>
        )}
      </Card>

      <Typography
        variant="body1"
        sx={{
          mt: 1,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {actor.name}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.6)",
          mt: 0.5,
        }}
      >
        {actor.character}
      </Typography>
    </Box>
  );
}
