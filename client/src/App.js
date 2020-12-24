import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper } from "./components/Wrapper";
import GlobalStyle from "./theme/globalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";


function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <>
        <GlobalStyle />
        {
          !user ? (
            <Login />
          ) : (
              <Wrapper>
                <Router>
                  <Sidebar />
                  <Switch>
                    <Route path="/rooms/:roomId" >
                      <Chat />
                    </Route>
                  </Switch>
                </Router>
              </Wrapper>
            )
        }
    </>
  );
}

export default App;
