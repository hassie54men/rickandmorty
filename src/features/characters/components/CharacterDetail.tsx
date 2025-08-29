import { useParams } from "react-router";
import { getCharacter } from "../../../api/characters";
import { useEffect, useState } from "react";
import type { Character } from "../../../api/types/characters";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const CharacterDetail = () => {
  const params = useParams();
  const charId = params.id;
  console.log(charId);
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    getCharacter(charId).then((res) => {
      const response = res;
      console.log(response);
      if (response) {
        setCharacter(response);
      }
    });
  }, []);

  return (
    // <div>
    //   <p>{`Name: ${character?.name}`}</p>
    //   <p>{`Gender: ${character?.gender}`}</p>
    //   <p>{`Episodes: ${character?.episode.length}`}</p>
    //   <img src={character?.image} alt="" />
    // </div>

    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={character?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {`Name: ${character?.name}`}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {`Gender: ${character?.gender}`}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {`Episodes: ${character?.episode.length}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
