import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getLocation } from "../../../api/locations";
import type { Location } from "../../../api/types/locations";
import { Box } from "@mui/material";

export default function LocationDetail() {
  const params = useParams();
  const locId = params.id;

  const [location, setLocation] = useState<Location | undefined>(undefined);
  useEffect(() => {
    getLocation(locId).then((loc) => {
      console.log(loc);
      if (loc) {
        setLocation(loc);
      }
    });
  }, []);
  return (
    <Box>
      <p>{location?.created}</p>
      <p>{location?.dimension}</p>
      <p>{location?.name}</p>
    </Box>
  );
}
