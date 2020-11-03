import React from "react";
import styled from "styled-components";
import "./styles.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import BookSlot from "./components/BookSlot";

import { LanguageProvider } from "./LanguageContext";

const AppComp = styled.div`
  background-color: #e9e8e3;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: "Montserrat", "sans-serif";
`;

const App = () => {
  return (
    <LanguageProvider>
      <AppComp>
        <Navbar />
        <Home />
        <About />
        <FAQ />
        <BookSlot />
      </AppComp>
    </LanguageProvider>
  );
};

export default App;
