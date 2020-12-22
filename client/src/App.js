import { Fragment, useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { Wrapper } from "./components/Wrapper";
import GlobalStyle from "./theme/globalStyles";
import Pusher from "pusher-js";
import axios from "./helper/Axios";

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get("/messages/sync").then(response => {
      setMessages(response.data)
    }).catch(err=>console.log(err))
  },[])
    // TODO before deploy change like that process.env.REACT_APP_PUSHER_KEY
  useEffect(() => {
    const pusher = new Pusher("0535ff3017ba7f86c21d", {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  // console.log(messages);
  return (
    <Fragment>
      <GlobalStyle />

      <Wrapper>
        <Sidebar />
        <Chat messages={messages}/>
      </Wrapper>

    </Fragment>

  );
}

export default App;
