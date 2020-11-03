import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";

const AboutComp = styled.section`
  width: 100%;
  height: 100%;
  padding: 80px 0;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 5%;
  padding: 0 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Pair = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 230px;
  height: 540px;

  @media only screen and (max-width: 992px) {
    width: 120px;
    height: 300px;
  }

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 240px;
  }
`;

const Text = styled.p`
  width: 160px;
  padding: 10px;
  line-height: 1.8em;
  font-size: 16px;
  text-align: center;

  @media only screen and (max-width: 992px) {
    width: 90px;
    font-size: 12px;
  }

  @media only screen and (max-width: 768px) {
    width: 70px;
    font-size: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  top: -20px;
`;

const LogoImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 60%;
  margin-bottom: 10px;

  @media only screen and (max-width: 992px) {
    width: 50%;
  }
`;

const IntroShadow = styled.div`
  position: relative;
  font-size: 40px;
  margin: 0;
  font-weight: 800;
  color: #d3c092;

  @media only screen and (max-width: 992px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const IntroText = styled.h1`
  position: absolute;
  top: -6px;
  font-size: 40px;
  margin: 0;
  font-weight: 800;
  color: black;

  @media only screen and (max-width: 992px) {
    top: -3px;
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const TitleShadow = styled.div`
  position: relative;

  font-size: 55px;
  margin: 0;
  font-weight: 800;
  color: #d3c092;

  @media only screen and (max-width: 992px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const TitleText = styled.h1`
  position: absolute;
  top: -6px;
  font-size: 55px;
  margin: 0;
  font-weight: 800;
  color: black;

  @media only screen and (max-width: 992px) {
    top: -4px;
    font-size: 30px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const Motto = styled.h2`
  font-size: 14px;
  font-weight: 800;

  @media only screen and (max-width: 992px) {
    font-size: 9px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 7px;
  }
`;

const About = () => {
  return (
    <AboutComp>
      <Container>
        <Pair>
          <Image src={vision} />
          <Text>
            Society working together, keeping in mind what's best, both for the
            community and the environment.
          </Text>
        </Pair>
        <Logo>
          <LogoImage src={logo} />
          <IntroShadow>
            introducing
            <IntroText>introducing</IntroText>
          </IntroShadow>
          <TitleShadow>
            benefitted
            <TitleText>benefitted</TitleText>
          </TitleShadow>
          <Motto>custom wear and thrifted goods</Motto>
        </Logo>
        <Pair>
          <Text>
            Society working together, keeping in mind what's best, both for the
            community and the environment.
          </Text>
          <Image src={mission} />
        </Pair>
      </Container>
    </AboutComp>
  );
};

export default About;
