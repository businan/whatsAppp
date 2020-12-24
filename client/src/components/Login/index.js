import React from "react";
import {
  LoginWrapper,
  LoginContainer,
  StyledImage,
  LoginTextContainer,
  LoginText,
  StyledButton,
} from "./Login.style";
import { auth, provider } from "../../helper/Firebase";
import { actionTypes } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

const Login = () => {

  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((err) => alert(err));
  };
  return (
    <LoginWrapper>
      <LoginContainer>
        <StyledImage
          src={
            "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          }
        />
        <LoginTextContainer>
          <LoginText>Sign in to WhatsApp</LoginText>
        </LoginTextContainer>

        <StyledButton type="submit" onClick={signIn}>
          Sign In With Google
        </StyledButton>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Login;
