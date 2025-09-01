import { Routes, Route } from "react-router";
import "./ReactRouter.css";
import Layout from "./Layout";
import { appRoutes } from "./routes";
import { CharacterList } from "../../features/characters/components/CharacterList";
import LocationList from "../../features/locationst/components/LocationList";
import { CharacterDetail } from "../../features/characters/components/CharacterDetail";
import LocationDetail from "../../features/locationst/components/LocationDetail";
import { EpisodeList } from "../../features/episodes/components/EpisodeList";
import { Main } from "../../features/main/components/Main";
import { EpisodeDetail } from "../../features/episodes/components/EpisodeDetail";
export default function ReactRouter() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={appRoutes.main} element={<Main />} />
          <Route path={appRoutes.characters} element={<CharacterList />} />
          <Route path={appRoutes.locations} element={<LocationList />} />
          <Route path={appRoutes.episodes} element={<EpisodeList />} />
          <Route path={appRoutes.characterId} element={<CharacterDetail />} />
          <Route path={appRoutes.locationId} element={<LocationDetail />} />
          <Route path={appRoutes.episodeId} element={<EpisodeDetail />} />
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </>
  );
}
