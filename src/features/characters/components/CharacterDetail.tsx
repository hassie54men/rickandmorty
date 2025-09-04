import { Link, useParams } from "react-router";
import { getCharacter } from "../../../api/characters";
import { useEffect, useState } from "react";
import type { Character } from "../../../api/types/characters";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { appRoutes } from "../../../app/router/routes";

export const CharacterDetail = () => {
  const params = useParams();
  const charId = Number(params.id);
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    getCharacter(charId).then((res) => {
      if (res) {
        setCharacter(res);
      }
    });
  }, []);

  const getLocationId = () => {
    return character?.location.url.split("/").pop(); // id
  };
  const getEpisodeId = (url: string) => {
    return url.split("/").pop();
  };

  return (
    // <div>
    //   <p>{`Name: ${character?.name}`}</p>
    //   <p>{`Gender: ${character?.gender}`}</p>
    //   <p>{`Episodes: ${character?.episode.length}`}</p>
    //   <img src={character?.image} alt="" />
    // </div>
    <Box sx={{ marginBlock: "20px" }}>
      <div className="personage_info">
        <div className="personage_info-image">
          <img src={character?.image} alt="" style={{ borderRadius: "5px" }} />
        </div>
        <div className="personage_info-text">
          <p>{`Created: ${character?.created}`}</p>
          <p>{`Gender: ${character?.gender}`}</p>
          <p>{`Name: ${character?.name}`}</p>
          <p>{`Species: ${character?.species}`}</p>
          <p>{`Status: ${character?.status}`}</p>
        </div>
      </div>
      <div className="personage-location">
        <p>{`Name: ${character?.location.name}`}</p>
        <Link to={appRoutes.locations + "/" + getLocationId()}>Локация</Link>
      </div>
      <div className="accordion">
        <Accordion>
          <AccordionSummary>
            <Typography>Episodes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {character?.episode.map((item) => (
              <p>
                <Link to={appRoutes.episodes + "/" + getEpisodeId(item)}>
                  {`Эпизод ${getEpisodeId(item)}`}
                </Link>
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
};
