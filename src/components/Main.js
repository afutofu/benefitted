import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Home from "./Home";

const MainComp = styled.div`
  background-color: #e9e8e3;
  width: 100%;
  min-height: 100vh;
  font-family: "Montserrat", "open-sans";
`;

const Main = () => {
  return (
    <MainComp>
      <Navbar />
      <Home />
    </MainComp>
  );
};

export default Main;
