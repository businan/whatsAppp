import styled from "styled-components";

export const SidebarWrapper = styled.div`
flex: 0.35;
display: flex;
flex-direction: column;

`;

export const SidebarHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-right: 1px solid lightgray;
`;

export const SidebarHeaderRight = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
min-width: 10vw;

.MuiSvgIcon-root{
    // margin-right: 2vw;
    font-size: 24px !important;
}
`;

export const SidebarSearch = styled.div`
display: flex;
align-items: center;
background-color: #f6f6f6;
height: 40px;
padding: 10px;
`;

export const SidebarSearchContainer = styled.div`
display: flex;
align-items: center;
background-color: white;
height: 35px;
width: 100%;
border-radius: 20px;
.MuiSvgIcon-root{
    color: gray;
    padding: 20px; 
}
`;

export const SidebarChats = styled.div`
flex: 1;
background-color: white;
overflow-y: scroll;
`;

export const StyledInput = styled.input`
border: none;
outline-width: 0;
margin: 0 5px 0 -10px;
`;