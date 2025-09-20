import "../App.css";
import ReactRouter from "./router/ReactRouter";
import { LoginProvider} from "./providers/loginProvider";

function App() {
  return (
    <>
      {/*<CharacterList />*/}
      {/*<LocationList />*/}
      <LoginProvider>
        <ReactRouter />
      </LoginProvider>
    </>
  );
}

export default App;
