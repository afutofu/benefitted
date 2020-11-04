import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import LanguagePicker from "./LanguagePicker";

const NavbarComp = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9e8e3;
  z-index: 100;

  transition: top 0.3s;

  @media only screen and (max-width: 1200px) {
    height: 100px;
  }

  @media only screen and (max-width: 992px) {
    height: 90px;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -100;
  transition: transform 0.4s ease-out;
  transform: ${(props) =>
    props.navOpen ? "translateX(0)" : "translateX(100%)"};
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
  margin: 0;
  font-weight: 700;
  padding: 5px;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  padding: 5px;
  margin-right: 9px;
  font-size: 18px;
  display: none;
  color: ${(props) => (props.navOpen ? "white" : "black")};
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  z-index: 50;

  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 90px;
    right: 5%;
    display: ${(props) => (props.navOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
  }
`;

const NavItem = styled.li`
  font-size: 16px;
  text-transform: uppercase;
  padding: 5px;
  margin: 0 20px;
  font-weight: 500;
  cursor: pointer;

  transition: color 0.1s;

  &:hover {
    color: #d3c092;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 14px;
    margin: 0 10px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
  }
`;

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  let navbar = useRef(null);

  useEffect(() => {
    navbar.style.top = "0px";
    const navbarClass = "." + navbar.getAttribute("class").split(" ").join(".");
    console.log(navbarClass);
    let lastScrollPosition = 0;
    window.addEventListener("scroll", () => {
      // Get navbar element
      const navbarDOM = document.querySelector(navbarClass);

      // Get position of top of screen, cross browser compatible
      let topOfScreenPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Make navbar stick until out of its height value
      if (topOfScreenPosition < navbarDOM.clientHeight) {
        navbarDOM.style.top = "0";

        // Get rid of shadow once it reaches 10px from top
        if (topOfScreenPosition < 10) {
          navbarDOM.style.boxShadow = "";
        }

        // Scrolling down
      } else if (topOfScreenPosition > lastScrollPosition) {
        navbarDOM.style.top = `-${navbarDOM.clientHeight}px`;
      } else {
        // Scrolling up
        navbarDOM.style.top = "0";
        navbarDOM.style.boxShadow = "0px 1px 15px 0px rgba(0, 0, 0, 0.1)";
      }
      lastScrollPosition = topOfScreenPosition;
    });
  }, [navbar]);

  return (
    <NavbarComp ref={(el) => (navbar = el)}>
      <Container>
        <Title>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            onClick={() => {
              setTimeout(() => {
                setNavOpen(false);
              }, 100);
            }}
          >
            bnftd.
          </Link>
        </Title>
        <Hamburger onClick={() => setNavOpen(!navOpen)} navOpen={navOpen}>
          {navOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </Hamburger>
        <Backdrop navOpen={navOpen} />
        <NavItems navOpen={navOpen}>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            onClick={() => {
              setTimeout(() => {
                setNavOpen(false);
              }, 100);
            }}
          >
            <NavItem>about</NavItem>
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={1000}
            onClick={() => {
              setTimeout(() => {
                setNavOpen(false);
              }, 100);
            }}
          >
            <NavItem>faq</NavItem>
          </Link>
          <Link
            to="bookslot"
            smooth={true}
            duration={1000}
            onClick={() => {
              setTimeout(() => {
                setNavOpen(false);
              }, 100);
            }}
          >
            <NavItem>book slot</NavItem>
          </Link>
          <LanguagePicker setNavOpen={setNavOpen} />
        </NavItems>
      </Container>
    </NavbarComp>
  );
};

export default Navbar;
