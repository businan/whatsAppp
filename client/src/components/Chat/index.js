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

const Chat = ({ messages }) => {
    // console.log(messages);

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    const messagesEndRef = useRef(null);

    console.log("inside chat component",roomId)
    useEffect(() => {
        if (roomId) {
            axios.get(`/rooms/${roomId}`).then(response => {
                console.log(response.data)
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
        console.log(roomId)
        try {
            await axios.post("/messages/new", {
                room_Id: roomId,
                message: input,
                name: "Demo App",
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
                    <ChatHeaderInfoLastSeen>Last seen at...</ChatHeaderInfoLastSeen>
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

                    <ChatBodyMessage className={!message.received ? "received" : null} key={message._id}>
                        <ChatBodyMessageOwner>
                            {message.name}
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
