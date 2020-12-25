import React, { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

import {
    ChatWrapper,
    ChatHeader,
    ChatHeaderInfo,
    ChatHeaderInfoRoom,
    ChatHeaderInfoLastSeen,
    ChatHeaderRight,
    ChatBody,
    ChatBodyMessage,
    ChatBodyMessageOwner,
    ChatBodyMessageTime,
    ChatFooter,
    StyledForm,
    StyledInput,
    StyledButton,
    StyledScrollDiv,
} from './Chat.style';
import axios from "../../helper/Axios";
import moment from 'moment';
import Pusher from "pusher-js";
import { useStateValue } from "../../context/StateProvider";



const Chat = () => {
    // console.log(messages);
    const [messages, setMessages] = useState([]);
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [{user}, dispatch] = useStateValue();
    

    const messagesEndRef = useRef(null);

    useEffect(() => {
        axios.get(`/messages/sync/${roomId}`).then(response => {
          setMessages(response.data)
        }).catch(err => console.log("Error while getting messagess", err))
      }, [roomId])
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
      }, [messages]);

    
      // console.log(messages)
    useEffect(() => {
        if (roomId) {
            axios.get(`/rooms/${roomId}`).then(response => {
                // console.log(response.data)
                setRoomName(response.data.roomName)
            }).catch(err => console.log("Error while getting rooms", err))
        }

    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        // console.log(roomId)
        
        try {
            await axios.post("/messages/new", {
                room_Id: roomId,
                message: input,
                name: user.displayName,
                timestamp: moment(),
                received: true
            });
        } catch (error) {
            console.log(error)
        }


        setInput("");
    }
 
    return (
        <ChatWrapper>
            <ChatHeader>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <ChatHeaderInfo>
                    <ChatHeaderInfoRoom>{roomName}</ChatHeaderInfoRoom>
                    <ChatHeaderInfoLastSeen>{messages[messages.length-1]?.timestamp}</ChatHeaderInfoLastSeen>
                </ChatHeaderInfo>

                <ChatHeaderRight>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </ChatHeaderRight>

            </ChatHeader>

            <ChatBody>
                {messages.map((message) => (

                    <ChatBodyMessage className={user.displayName===message.name ? "received" : null} key={message._id}>
                        <ChatBodyMessageOwner>
                            {message.name.match(/\b(\w)/g).join('')}
                        </ChatBodyMessageOwner>
                        {message.message}
                        <ChatBodyMessageTime>
                            {moment(message.timestamp).format("HH:mm:ss")}
                        </ChatBodyMessageTime>
                    </ChatBodyMessage>

                ))}
                <StyledScrollDiv ref={messagesEndRef} />

            </ChatBody>

            <ChatFooter>
                <InsertEmoticon />

                <StyledForm>
                    <StyledInput
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text" />
                    <StyledButton
                        onClick={sendMessage}
                        type="submit">
                        Send a message
                    </StyledButton>
                </StyledForm>

                <MicIcon />

            </ChatFooter>
        </ChatWrapper>
    )
}

export default Chat;
