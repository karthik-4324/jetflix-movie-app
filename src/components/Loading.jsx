import { CircularProgress, Box } from "@mui/material";

export function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px",
      }}
    >
      <CircularProgress />
    </Box>
  );
}