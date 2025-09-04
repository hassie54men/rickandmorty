import { useEffect, useState } from "react";
import type { Character } from "../../../api/types/characters";
import { getCharacters } from "../../../api/characters";
import { CharacterCard } from "./CharacterCard";
import { Box, Button, ButtonGroup, Grid, TextField } from "@mui/material";

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState(1);

  function nextPage() {
    if (page < 42) {
      setPage(page + 1);
      console.log(page);
    }
  }
  function previousPage() {
    setPage(page - 1);
    if (page === 1) {
      setPage(page);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getCharacters({ name: search, page: page })
      .then((res) => {
        if (res) {
          console.log(res.results);
          setCharacters(res.results);
          setError(null);
        } else {
          setError("Not found");
        }
      })
      .catch((e) => {
        setError(e?.message || "error");
      })
      .finally(() => setIsLoading(false));
  }, [search, page]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Box>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <TextField
          fullWidth
          label="Search personage"
          id="personage"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="outlined"
          type={"submit"}
          onClick={() => setSearch(value)}
        >
          Search
        </Button>
      </Box>
      <Box
        component={"div"}
        sx={{ display: "flex", justifyContent: "center", marginBlock: "20px" }}
      >
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button onClick={nextPage}>Next</Button>
          <Button onClick={previousPage}>Previous</Button>
        </ButtonGroup>
      </Box>
      <Grid container spacing={3} sx={{ marginBlock: "20px" }}>
        {characters.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 3 }}>
            <CharacterCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
