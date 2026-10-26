import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export function SortMovies({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 220 }}>
      <InputLabel sx={{ color: "white" }}>Sort by</InputLabel>

      <Select
        value={sort}
        onChange={handleChange}
        label="Sort by"
        sx={{
          color: "white",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },

          "& .MuiSvgIcon-root": {
            color: "white",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "white",

              "& .MuiMenuItem-root": {
                color: "black",
              },

              "& .MuiMenuItem-root:hover": {
                backgroundColor: "#f0f0f0",
              },

              "& .Mui-selected": {
                backgroundColor: "#e0e0e0",
              },
            },
          },
        }}
      >
        <MenuItem value="rating-desc">Rating: High → Low</MenuItem>

        <MenuItem value="rating-asc">Rating: Low → High</MenuItem>
      </Select>
    </FormControl>
  );
}
