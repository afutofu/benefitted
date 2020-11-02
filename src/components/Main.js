import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";

const MainComp = styled.div`
  background-color: #e9e8e3;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: "Montserrat", "sans-serif";
`;

const Main = () => {
  return (
    <MainComp>
      <Navbar />
      <Home />
      <About />
      <FAQ />
    </MainComp>
  );
};

export default Main;
