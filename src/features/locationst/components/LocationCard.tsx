import type { Location } from "../../../api/types/locations.ts";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export function LocationCard(props: Location) {
  const { name, dimension, type } = props;

  return (
    <Card className="card-item">
      <CardActionArea
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
