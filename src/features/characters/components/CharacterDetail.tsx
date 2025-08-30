import { useParams } from "react-router";
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
import LocationDetail from "../../locationst/components/LocationDetail";

export const CharacterDetail = () => {
  const params = useParams();
  const charId = params.id;
  console.log(charId);
  const [character, setCharacter] = useState<Character | null>(null);
  useEffect(() => {
    getCharacter(charId).then((res) => {
      const response = res;
      console.log(response);
      if (response) {
        setCharacter(response);
      }
    });
  }, []);

  return (
    // <div>
    //   <p>{`Name: ${character?.name}`}</p>
    //   <p>{`Gender: ${character?.gender}`}</p>
    //   <p>{`Episodes: ${character?.episode.length}`}</p>
    //   <img src={character?.image} alt="" />
    // </div>
    <Box>
      <div className="personage_info">
        <div className="personage_info-image">
          <img src={character?.image} alt="" />
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
        <a href={character?.location.url}>Локация</a>
      </div>
      <div className="accordion">
        <Accordion>
          <AccordionSummary>
            <Typography>Episodes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {character?.episode.map((item) => (
              <p>{item}</p>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
};
