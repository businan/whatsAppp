import React, { useState, useEffect } from 'react'
import {
    SidebarWrapper,
    SidebarHeader,
    SidebarHeaderRight,
    SidebarSearch,
    SidebarSearchContainer,
    SidebarChats,
    StyledInput
} from './Sidebar.style';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { SearchOutlined } from '@material-ui/icons';
import { IconButton, Avatar } from '@material-ui/core';
import SidebarChat from '../SidebarChat';
import Pusher from "pusher-js";
import axios from "../../helper/Axios";

const Sidebar = () => {
    
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
    console.log(rooms)
    return (
        <SidebarWrapper >
            <SidebarHeader>
                <Avatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />

                <SidebarHeaderRight>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </SidebarHeaderRight>
            </SidebarHeader>

            <SidebarSearch>
                <SidebarSearchContainer>
                    <SearchOutlined />

                    <StyledInput placeholder="Search or start new chat" type="text" />

                </SidebarSearchContainer>
            </SidebarSearch>

            <SidebarChats>
                <SidebarChat addNewChat />
                {
                    rooms.map((room) => (

                        <SidebarChat roomName={room.roomName} key={room._id} id={room._id} />
                    ))
                }

            </SidebarChats>

        </SidebarWrapper>

    )
}

export default Sidebar;
