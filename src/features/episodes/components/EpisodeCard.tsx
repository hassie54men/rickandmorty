import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import type { Episode } from "../../../api/types/episodes";
import { appRoutes } from "../../../app/router/routes";
import { useNavigate } from "react-router";

export function EpisodeCard(props: Episode) {
  const { id, name, air_date, created } = props;
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea onClick={() => navigate(`${appRoutes.episodes}/${id}`)}>
        <CardContent>
          <Typography variant="h6">{}</Typography>
          <Typography>{id}</Typography>
          <Typography>{name}</Typography>
          <Typography>{air_date}</Typography>
          <Typography>{created}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
