import React, { useState, useRef,useEffect } from 'react';
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
    ChatBodyMessageReciever,
    ChatFooter,
    StyledForm,
    StyledInput,
    StyledButton,
    StyledScrollDiv,
} from './Chat.style';
import axios from "../../helper/Axios";
import moment from 'moment';

const Chat = ({ messages }) => {
    console.log(messages);
    
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/messages/new", {
            message: input,
            name: "Demo App",
            timestamp: moment().format("HH:mm:ss"),
            received: false
        });
        } catch (error) {
            console.log(error)
        }
        

        setInput("");
    }
    return (
        <ChatWrapper>
            <ChatHeader>
                <Avatar />

                <ChatHeaderInfo>
                    <ChatHeaderInfoRoom>Room Name</ChatHeaderInfoRoom>
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
                    message.received ? (
                        <ChatBodyMessage key={message._id}>
                            <ChatBodyMessageOwner>
                                {message.name}
                            </ChatBodyMessageOwner>
                            {message.message}
                            <ChatBodyMessageTime>
                                {message.timestamp}
                            </ChatBodyMessageTime>
                        </ChatBodyMessage>
                    ) : (
                            <ChatBodyMessageReciever key={message._id}>
                                <ChatBodyMessageOwner>
                                    {message.name}
                                </ChatBodyMessageOwner>
                                {message.message}
                                <ChatBodyMessageTime>
                                    {message.timestamp}
                                </ChatBodyMessageTime>
                            </ChatBodyMessageReciever>
                        )

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
