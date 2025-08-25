import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Character } from "../../../api/types/characters.ts";

export function CharacterCard(props: Character) {
  const { name, gender, location, image } = props;

  return (
    <Card className="card-item">
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography variant="h6">{`Name: ${name}`}</Typography>
          <Typography>{`Gender: ${gender}`}</Typography>
          <Typography>{`Location Name: ${location.name}`}</Typography>
        </CardContent>
        <CardMedia
          image={image}
          component="img"
          height="140"
          sx={{
            objectFit: "cover",
            width: "100%",
            marginTop: "auto", // прижимает к низу
          }}
        />
      </CardActionArea>
    </Card>
  );
}
