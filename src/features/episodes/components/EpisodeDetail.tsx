import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getEpisode } from "../../../api/episodes";
import type { Episode } from "../../../api/types/episodes";
import { Box, Typography } from "@mui/material";

export function EpisodeDetail() {
  const params = useParams();
  const episodeId = Number(params.id);
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    getEpisode(episodeId).then((episode) => {
      if (episode) {
        setEpisode(episode);
      }
    });
  }, []);

  return (
    <Box>
      <Typography>{episode?.id}</Typography>
      <Typography>{episode?.name}</Typography>
      <Typography>{episode?.air_date}</Typography>
      <Typography>{episode?.episode}</Typography>
    </Box>
  );
}
