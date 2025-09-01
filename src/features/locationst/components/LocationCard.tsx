import type { Location } from "../../../api/types/locations";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { appRoutes } from "../../../app/router/routes";

export function LocationCard(props: Location) {
  const { name, dimension, type, id } = props;
  const navigate = useNavigate();

  return (
    <Card className="card-item">
      <CardActionArea
        onClick={() => navigate(`${appRoutes.locations}/${id}`)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <CardContent>
          <Typography variant="h6">{`Name: ${name}`}</Typography>
          <Typography>{`Dimension: ${dimension}`}</Typography>
          <Typography>{`Type: ${type}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
