import { Avatar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { 
    SidebarChatWrapper, 
    SidebarChatInfo, 
    SidebarChatRoomName, 
    SidebarChatLastMessage,
    SidebarChatAddRoomName 
} from './SidebarChat.style';
import axios from "../../helper/Axios";

const SidebarChat = ({ roomName, addNewChat }) => {

    const [seed, setSeed] = useState("");

    useEffect(()=> {
        setSeed(Math.floor(Math.random()*5000))
    },[]);

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
    
    return !addNewChat ? (
        <SidebarChatWrapper >
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <SidebarChatInfo>
                <SidebarChatRoomName> {roomName}</SidebarChatRoomName>
                <SidebarChatLastMessage>This is the last message</SidebarChatLastMessage>
            </SidebarChatInfo>

        </SidebarChatWrapper>
    ) : (
        <SidebarChatWrapper onClick={createChat}>
            <SidebarChatAddRoomName>Add New Chat</SidebarChatAddRoomName>
        </SidebarChatWrapper>
    )
}

export default SidebarChat;