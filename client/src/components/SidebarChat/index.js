import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {
    SidebarChatWrapper,
    SidebarChatInfo,
    SidebarChatRoomName,
    SidebarChatLastMessage,
    SidebarChatAddRoomName,
    StyledLink
} from './SidebarChat.style';
import axios from "../../helper/Axios";


const SidebarChat = ({ roomName, addNewChat, id }) => {
    console.log(id)
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState([]);
   
    useEffect(() => {
        const getMessages = () => {
            axios.get(`/messages/sync/${id}`).then(response => {
                setMessages(response.data)
               
              }).catch(err => console.log("Error while getting messagess", err))
        }
              
        getMessages();

      }, [id])
     

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = async (e) => {
        e.preventDefault();

        const enteredRoomName = prompt("Please Enter Room Name");

        if (enteredRoomName) {
            try {
                await axios.post("/rooms/new", {
                    roomName: enteredRoomName,
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
    // console.log("from sidebar",messages)
    return !addNewChat ? (
        <StyledLink to={`/rooms/${id}`}>
            <SidebarChatWrapper >
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <SidebarChatInfo>
                    <SidebarChatRoomName> {roomName}</SidebarChatRoomName>
                    <SidebarChatLastMessage>{messages[messages.length-1]?.message}</SidebarChatLastMessage>
                </SidebarChatInfo>

            </SidebarChatWrapper>
        </StyledLink>

    ) : (
            <SidebarChatWrapper onClick={createChat}>
                <SidebarChatAddRoomName>Add New Chat</SidebarChatAddRoomName>
            </SidebarChatWrapper>
        )
}

export default SidebarChat;