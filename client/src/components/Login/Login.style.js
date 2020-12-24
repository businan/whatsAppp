import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const LoginWrapper = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;
export const LoginContainer = styled.div`
  padding: 30px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
export const StyledImage = styled.img`
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
`;
export const StyledButton = styled(Button)`
  margin-top: 50px !important;
  text-transform: inherit !important;
  background-color: #0a8d48 !important;
  color: white !important;
`;
export const LoginTextContainer = styled.div``;
export const LoginText = styled.h1``;
