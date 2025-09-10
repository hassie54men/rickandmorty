import {useContext, useEffect, useState} from "react";
import { getEpisodes } from "../../../api/episodes";
import type { Episode } from "../../../api/types/episodes";
import { Grid } from "@mui/material";
import { EpisodeCard } from "./EpisodeCard";
import {AuthContext} from "../../../app/providers/authProvider";

export function EpisodeList() {
  const [episode, setEpisode] = useState<Episode[] | null>(null);
    const context  = useContext(AuthContext)

    useEffect(() => {
    getEpisodes().then((res) => {
      if (res) {
        console.log(res.results);
        setEpisode(res.results);
      }
    });
  }, []);

    if (context && !context.isAuth) {
        return <h2>No access</h2>
    }


  return (
    <>
      <Grid
        container
        spacing={3}
        columns={{ xs: 3, md: 6 }}
        sx={{ marginBlock: "20px" }}
      >
        {episode?.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 3 }}>
            <EpisodeCard {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
