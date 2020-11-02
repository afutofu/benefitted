import React from "react";
import styled from "styled-components";

import LanguagePicker from "./LanguagePicker";

const NavbarComp = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e8e3;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 55px;
  margin: 0;
  font-weight: 700;
  padding: 5px;
  cursor: pointer;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 20px;
  text-transform: uppercase;
  padding: 5px;
  margin: 0 20px;
  font-weight: 500;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarComp>
      <Container>
        <Title>bnftd.</Title>
        <NavItems>
          <NavItem>about</NavItem>
          <NavItem>faq</NavItem>
          <NavItem>book slot</NavItem>
          <LanguagePicker />
        </NavItems>
      </Container>
    </NavbarComp>
  );
};

export default Navbar;
