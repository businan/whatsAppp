import { Avatar } from '@material-ui/core';
import React from 'react';
import { SidebarChatWrapper, SidebarChatInfo, SidebarChatRoomName, SidebarChatLastMessage } from './SidebarChat.style';

const SidebarChat = () => {
    return (
        <SidebarChatWrapper>
            <Avatar />
            <SidebarChatInfo>
                <SidebarChatRoomName> Room Name</SidebarChatRoomName>
                <SidebarChatLastMessage>This is the last message</SidebarChatLastMessage>
            </SidebarChatInfo>

        </SidebarChatWrapper>
    )
}

export default SidebarChat;