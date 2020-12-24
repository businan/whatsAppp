import { Fragment, useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper } from "./components/Wrapper";
import GlobalStyle from "./theme/globalStyles";
import Pusher from "pusher-js";
import axios from "./helper/Axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("/rooms/sync").then(response => {
      setRooms(response.data)
    }).catch(err => console.log("Error while getting rooms", err))
  }, [])

  
  // TODO before deploy change like that process.env.REACT_APP_PUSHER_ROOM_KEY
  useEffect(() => {
    const pusher = new Pusher("6be09bff2ab535064f85", {
      cluster: "mt1",
    });
    const channel = pusher.subscribe('rooms');
    channel.bind('inserted', (newRoom) => {
      // alert(JSON.stringify(newMessage));
      setRooms([...rooms, newRoom])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [rooms])

  // console.log(messages);
  // console.log(rooms)
  return (
    <Fragment>
      <GlobalStyle />

      <Wrapper>

        <Router>


          <Sidebar rooms={rooms} />
          <Switch>
            <Route path="/rooms/:roomId" >
              <Chat />
            </Route>
            {/* <Route path="/" >
              <Chat messages={messages} />
            </Route> */}


          </Switch>

        </Router>

      </Wrapper>

    </Fragment>

  );
}

export default App;
