import React, { useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";

import { AdminContext } from "../contexts/AdminContext";

const modalFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%)
  }
  1%{
    opacity:0;
    transform:translateX(0%);
  }
  100%{
    opacity:1;
    transform: translateX(0%)
  }
`;

const modalFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%)
  }
  99%{
    opacity:0;
    transform: translateX(0%)
  }
  100%{
    opacity:0;
    transform: translateX(100%)
  }
`;

const ButtonContainerHeight = "70px";
const horizontalPadding = "25px";

const AdminModalComp = styled.div`
  color: #222;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  transform: translateX(-100%);
  opacity: 0;

  animation: ${(props) =>
      props.modalOpen ? modalFadeIn : props.firstRender ? "none" : modalFadeOut}
    0.5s forwards;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 250;
`;

const AdminBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
  /* background-color: #e9e8e3; */
  background-color: #e2d6c0;
  font-family: "Montserrat", "san-serif";
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: ${ButtonContainerHeight};
  box-sizing: border-box;
  z-index: 300;
  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${horizontalPadding};
  padding-bottom: 0;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 22px;
  margin-bottom: 25px;
`;

const Header = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 500;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: red;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: "Admin Password",
  type: "password",
}))`
  position: relative;
  width: 100%;
  height: 45px;
  padding: 10px 20px;
  border-radius: 10px;
  color: black;
  background-color: #e9e8e3;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  font-family: "Montserrat", "san-serif";
  margin: 0;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${ButtonContainerHeight};
  background-color: #d3c092;
  border-radius: 0 0 10px 10px;
  padding: ${horizontalPadding};
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-family: "Montserrat", "san-serif";
    box-sizing: border-box;
    font-weight: 500;
  }
`;

const LoginButton = styled.button`
  border: none;
  outline: none;
  /* background-color: #e9e8e3; */
  background: ${(props) => (props.success ? "#0eb514" : "#e9e8e3")};
  pointer-events: ${(props) => (props.success ? "none" : "auto")};
  color: #222;
  margin-right: 20px;

  transition: 0.2s;
  :hover {
    background: ${(props) => (props.success ? "#0eb514" : "white")};
  }
`;

const CancelButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: #222;

  :hover {
    text-decoration: underline;
  }
`;

let firstRender = true;
const AdminModal = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const { admin, modal } = useContext(AdminContext);
  const { modalOpen, setModalOpen } = modal;
  const { setIsAdmin } = admin;

  if (modalOpen) firstRender = false;

  const login = (password) => {
    setErrorMsg(null);
    axios
      .post("/api/auth", { password })
      .then(() => {
        setIsAdmin(true);
        setSuccess(true);
        setTimeout(() => {
          setModalOpen(false);
        }, 500);
      })
      .catch((err) => {
        setPassword("");
        setTimeout(() => {
          setErrorMsg(err.response.data.msg);
        }, 500);
      });
  };

  if (!firstRender) {
    return (
      <AdminModalComp modalOpen={modalOpen} firstRender={firstRender}>
        <Backdrop onClick={() => setModalOpen(false)} />
        <AdminBox>
          <Container>
            <Title>admin login</Title>
            <Header>enter password</Header>
            {errorMsg !== "" && <ErrorMessage>{errorMsg}</ErrorMessage>}
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onKeyPress={(e) => {
                if (e.key === "Enter") login(password);
              }}
            />
          </Container>
          <ButtonContainer>
            <LoginButton onClick={() => login(password)} success={success}>
              {success ? "Friend Request Sent" : "Send Friend Request"}
            </LoginButton>
            <CancelButton onClick={() => setModalOpen(false)}>
              Cancel
            </CancelButton>
          </ButtonContainer>
        </AdminBox>
      </AdminModalComp>
    );
  }

  return null;
};

export default AdminModal;
