import { useEffect, useState } from "react";
import type {
  Character,
  CharacterListResponse,
} from "../../../api/types/characters";
import { getCharacters } from "../../../api/characters";
import { CharacterCard } from "./CharacterCard";
import { Grid } from "@mui/material";

export function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((res) => {
        const response = res as CharacterListResponse | undefined;

        if (response) {
          setCharacters(response.results);
          setError(null);
        } else {
          setError("Not found");
        }
      })
      .catch((e) => {
        setError(e?.message || "error");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {characters.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 3 }}>
            <CharacterCard {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
