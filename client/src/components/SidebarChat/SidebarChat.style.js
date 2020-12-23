import styled from "styled-components";

export const SidebarChatWrapper = styled.div`
display: flex;
padding: 10px;
align-items: center;
cursor: pointer;
border-bottom: 1px solid #f6f6f6;
    &:hover  {
    background-color: #ebebeb;
  }
`;

export const SidebarChatInfo = styled.div`
margin-left: 20px;
`;

export const SidebarChatRoomName = styled.h2`
font-size: 16px;
margin-bottom: 4px;
`;

export const SidebarChatAddRoomName = styled.h2`
font-size: 20px;
margin: 0 auto 4px auto;
`;

export const SidebarChatLastMessage = styled.p`
font-size: 12px;
`;