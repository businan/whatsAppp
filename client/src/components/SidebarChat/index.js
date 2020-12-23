import { Avatar } from '@material-ui/core';
import React from 'react';
import { SidebarChatWrapper, SidebarChatInfo, SidebarChatRoomName, SidebarChatLastMessage } from './SidebarChat.style';

const SidebarChat = ({ roomName }) => {
    
    return (
        <SidebarChatWrapper >
            <Avatar />
            <SidebarChatInfo>
                <SidebarChatRoomName> {roomName}</SidebarChatRoomName>
                <SidebarChatLastMessage>This is the last message</SidebarChatLastMessage>
            </SidebarChatInfo>

        </SidebarChatWrapper>
    )
}

export default SidebarChat;