import styled from "styled-components";

export const ChatWrapper = styled.div`
display: flex;
flex: 0.65;
flex-direction: column;
`;

export const ChatHeader = styled.div`
padding: 20px;
display: flex;
align-items: center;
border-bottom: 1px solid lightgray;
max-height: 45px; 
`;


export const ChatHeaderInfo = styled.div`
flex: 1;
padding-left: 20px;
max-height: 50px;
overflow: hidden;
`;

export const ChatHeaderInfoRoom = styled.h3`
margin-bottom: 3px;
font-weight: 500;
`;

export const ChatHeaderInfoLastSeen = styled.p`
color: gray;
`;

export const ChatHeaderRight = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
min-width: 10vw;
`;

export const ChatBody = styled.div`
flex: 1;
background-image: url("https://www.setaswall.com/wp-content/uploads/2019/08/Whatsapp-Wallpaper-107-768x1365.jpg");
background-repeat: repeat;
background-position: center;
padding: 30px;
overflow-y: scroll;
`;

export const ChatBodyMessage = styled.p`
position: relative;
font-size: 16px;
padding: 8px;
width: fit-content;
border-radius: 10px;
background-color: #fff;
margin-bottom: 30px;
&.received{
    margin-left: auto;
background-color: #dcf8c6;
}
`;

export const ChatBodyMessageOwner = styled.span`
position: absolute;
top: -15px;
font-weight: 800;
font-size: 10px;
`;

export const ChatBodyMessageTime = styled.span`
margin-left: 10px;
font-size: 10px;
`;

export const ChatFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
border-top: 1px solid lightgray;

.MuiSvgIcon-root{
    padding: 10px;
    color: gray;
}
`;
export const StyledForm = styled.form`
display: flex;
flex: 1;
`;

export const StyledInput = styled.input`
flex: 1;
border-radius: 30px;
padding: 10px;
border: none;
outline-width: 0;
`;

export const StyledButton = styled.button`
display: none;
`;

export const StyledScrollDiv = styled.div`

`;

