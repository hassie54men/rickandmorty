import { Routes, Route } from "react-router";
import "./ReactRouter.css";
import Layout from "./Layout";
import { appRoutes } from "./routes";
import { CharacterList } from "../../features/characters/components/CharacterList";
import LocationList from "../../features/locationst/components/LocationList";
import { CharacterDetail } from "../../features/characters/components/CharacterDetail";
export default function ReactRouter() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={appRoutes.main} element={<div>Home</div>} />
          <Route path={appRoutes.characters} element={<CharacterList />} />
          <Route path={appRoutes.locations} element={<LocationList />} />
          <Route path={appRoutes.characterId} element={<CharacterDetail />} />
          <Route path="*" element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </>
  );
}
