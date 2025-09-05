import { useEffect, useState } from "react";
import type {
  Location,
  LocationListResponse,
} from "../../../api/types/locations";
import { getLocations } from "../../../api/locations";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { LocationCard } from "./LocationCard";

export default function LocationList() {
  const [location, setLocation] = useState<Location[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const [search, setSearch] = useState("");
  const [buttonSearch, setButtonSearch] = useState<string | undefined>();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(7);

  function searchLocation() {
    setButtonSearch(search);
  }

  function nextPage() {
    if (page <= 7) {
      setPage(page + 1);
    }
  }
  function previousPage() {
    if (page === 1) {
      return;
    }
    if (page >= 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    setLoading(true);
    getLocations({ name: search, page: page }).then((res) => {
      const response = res as LocationListResponse | undefined;
      if (response) {
        console.log(response?.results);
        setLocation(response?.results);
        setLoading(false);
        setPages(response.info.pages);
      } else {
        setError("new error");
      }
    });
  }, [buttonSearch, page]);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    alert("error");
  }
  return (
    <Box>
      <Box sx={{ display: "flex", marginBlock: "20px" }}>
        <TextField
          fullWidth
          label="Search personage"
          id="location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outlined" type={"submit"} onClick={searchLocation}>
          Search
        </Button>
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={previousPage} disabled={page === 1}>
          Previous
        </Button>
        <Typography>{`${page} / ${pages}`}</Typography>
        <Button onClick={nextPage} disabled={page >= 7}>
          Next
        </Button>
      </Stack>
      <Grid
        container
        spacing={3}
        columns={{ xs: 3, md: 6 }}
        sx={{ marginBlock: "20px" }}
      >
        {location?.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 3 }}>
            <LocationCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
