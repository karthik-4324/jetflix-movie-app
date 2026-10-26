import { Toolbar, AppBar, Typography, Box, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#050912",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "90px",
          px: { xs: 2, md: 6 },
        }}
      >
        {/* Logo + App Name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          {/* Logo */}
          <Box
            sx={{
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FF3158",
            }}
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              {/* Top-left blade */}
              <path
                fill="currentColor"
                d="
        M7.1 0.4
        C6.1 0.3 5.2 0.6 4.4 1.2
        C3.3 2.0 2.7 3.3 2.7 4.7
        V10.4
        C2.7 12.1 3.6 13.6 5.0 14.5
        L10.4 17.8
        C11.2 18.3 12.2 18.3 13.0 17.8
        L21.4 12.6
        C23.1 11.5 23.1 9.1 21.4 8.0
        L9.1 0.8
        C8.5 0.5 7.8 0.3 7.1 0.4Z
      "
              />

              {/* Right blade */}
              <path
                transform="translate(0 -0.35)"
                fill="currentColor"
                d="
    M27.2 12.1
    C28.1 11.6 29.1 11.6 30.0 12.1
    L33.3 14.1
    C34.7 15.0 35.5 16.5 35.5 18.2
    V20.3
    C35.5 22.0 34.6 23.5 33.2 24.4
    L28.7 27.2
    C27.9 27.7 26.9 27.7 26.1 27.2
    L17.7 22.1
    C16.0 21.1 16.0 18.7 17.7 17.6
    L27.2 12.1Z
  "
              />

              {/* Bottom-left blade */}
              <path
                fill="currentColor"
                d="
        M10.3 21.4
        C11.2 20.8 12.3 20.8 13.2 21.4
        L21.4 26.5
        C23.1 27.5 23.1 29.9 21.4 30.9
        L8.3 38.0
        C5.8 39.4 2.7 37.6 2.7 34.7
        V29.1
        C2.7 27.5 3.5 26.0 4.9 25.1
        L10.3 21.4Z
      "
              />
            </svg>
          </Box>

          {/* App Name */}
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              fontWeight: 800,
              letterSpacing: "-0.5px",
              color: "#ff2d55",
            }}
          >
            Jetflix
          </Typography>
        </Box>

        {/* Right Side */}
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, md: 3 },
          }}
        >
          <SearchBar />

          <IconButton
            onClick={() => navigate("/watchlist")}
            sx={{
              color: "white",
              width: 48,
              height: 48,
              backgroundColor: "rgba(255,255,255,0.08)",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.15)",
              },
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
