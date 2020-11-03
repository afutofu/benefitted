import React from "react";
import styled from "styled-components";
import "./styles.css";

import AdminModal from "./components/AdminModal";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import FAQ from "./components/FAQ";
import BookSlot from "./components/BookSlot";
import Footer from "./components/Footer";

import { LanguageProvider } from "./contexts/LanguageContext";
import { AdminProvider } from "./contexts/AdminContext";

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
      <AdminProvider>
        <AppComp>
          <AdminModal />
          <Navbar />
          <Home />
          <About />
          <FAQ />
          <BookSlot />
          <Footer />
        </AppComp>
      </AdminProvider>
    </LanguageProvider>
  );
};

export default App;
