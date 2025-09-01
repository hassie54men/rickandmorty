import { useEffect, useState } from "react";
import type {
  Location,
  LocationListResponse,
} from "../../../api/types/locations";
import { getLocations } from "../../../api/locations";
import { Grid } from "@mui/material";
import { LocationCard } from "./LocationCard";

export default function LocationList() {
  const [location, setLocation] = useState<Location[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    setLoading(true);
    getLocations().then((res) => {
      const response = res as LocationListResponse | undefined;
      if (response) {
        console.log(response?.results);
        setLocation(response?.results);
        setLoading(false);
      } else {
        setError("new error");
      }
    });
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    alert("error");
  }
  return (
    <>
      <Grid container spacing={3} columns={{ xs: 3, md: 6 }}>
        {location?.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 3 }}>
            <LocationCard {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
