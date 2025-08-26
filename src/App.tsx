import "./App.css";
import { CharacterList } from "./features/characters/components/CharacterList.tsx";
import LocationList from "./features/locationst/components/LocationList.tsx";

function App() {
  return (
    <>
      <CharacterList />
      <LocationList />
    </>
  );
}

export default App;
