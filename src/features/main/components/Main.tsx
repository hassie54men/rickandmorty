import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCharacterSearch } from "../../../api/characters";

export function Main() {
  const [value, setValue] = useState<string>();
  const [searchName, setSearchName] = useState<string>();

  useEffect(() => {
    getCharacterSearch(value).then((item) => {
      console.log(item);
      if (item) {
        setSearchName(item);
      }
    });
  }, []);
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBlock: "20px",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        component={"div"}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <TextField
          fullWidth
          label="Search personage"
          id="personage"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="outlined" type={"submit"}>
          Search
        </Button>
      </Box>
      <img
        src="https://rick-i-morty.online/wp-content/uploads/2021/06/5-sezon.jpg"
        alt=""
        width="494"
        height="741"
      />
      <Typography>{value}</Typography>
    </Box>
  );
}
