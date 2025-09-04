import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Character } from "../../../api/types/characters";
import { useNavigate } from "react-router";
import { appRoutes } from "../../../app/router/routes";

export function CharacterCard(props: Character) {
  const { name, gender, location, image, id } = props;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <CardActionArea
        onClick={() => navigate(`${appRoutes.characters}/${id}`)}
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
          height="220"
          sx={{
            objectFit: "cover",
            width: "100%",
            marginTop: "auto",
            borderRadius: "5px",
          }}
        />
      </CardActionArea>
    </Card>
  );
}
