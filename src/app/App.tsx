import "../App.css";
import ReactRouter from "./router/ReactRouter";
import {AuthProvider} from "./providers/authProvider";

function App() {
  return (
    <>
      {/*<CharacterList />*/}
      {/*<LocationList />*/}
      <AuthProvider>
        <ReactRouter />
      </AuthProvider>
    </>
  );
}

export default App;
