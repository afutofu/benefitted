import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";

import { LanguageContext } from "../contexts/LanguageContext";

const AboutComp = styled.section`
  width: 100%;
  height: 100%;
  padding: 20vh 0;
  padding-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 992px) {
    padding: 15vh 0;
    padding-top: 30vh;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  padding: 0 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`;

const Pair = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-bottom: 180px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 200px;
  height: 500px;

  @media only screen and (max-width: 1200px) {
    width: 150px;
    height: 380px;
  }

  @media only screen and (max-width: 992px) {
    width: 120px;
    height: 300px;
  }

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 500px;
  }

  @media only screen and (max-width: 600px) {
    width: 180px;
    height: 400px;
  }

  @media only screen and (max-width: 450px) {
    width: 120px;
    height: 350px;
  }

  @media only screen and (max-width: 350px) {
    width: 100px;
    height: 300px;
  }
`;

const Text = styled.p`
  width: 130px;
  padding: 15px;
  line-height: 2em;
  font-size: 16px;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    width: 100px;
    font-size: 14px;
    line-height: 1.8em;
  }

  @media only screen and (max-width: 992px) {
    width: 90px;
    font-size: 12px;
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 15px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 12px;
    line-height: 1.6em;
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

  @media only screen and (max-width: 768px) {
    margin-bottom: 150px;
  }
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
  font-size: 35px;
  margin: 0;
  font-weight: 800;
  color: #d3c092;

  @media only screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 25px;
  }
`;

const IntroText = styled.h1`
  position: absolute;
  top: -5px;
  font-size: 35px;
  margin: 0;
  font-weight: 800;
  color: black;

  @media only screen and (max-width: 1200px) {
    top: -4px;
    font-size: 25px;
  }

  @media only screen and (max-width: 992px) {
    top: -3px;
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 25px;
  }
`;

const TitleShadow = styled.div`
  position: relative;

  font-size: 50px;
  margin: 0;
  font-weight: 800;
  color: #d3c092;

  @media only screen and (max-width: 1200px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 35px;
  }
`;

const TitleText = styled.h1`
  position: absolute;
  top: -6px;
  font-size: 50px;
  margin: 0;
  font-weight: 800;
  color: black;

  @media only screen and (max-width: 1200px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 992px) {
    top: -4px;
    font-size: 30px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 35px;
  }
`;

const Motto = styled.h2`
  font-size: 14px;
  font-weight: 800;

  @media only screen and (max-width: 1200px) {
    font-size: 11px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 9px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;
  }
`;

const About = () => {
  const [language] = useContext(LanguageContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  if (width < 768) {
    return (
      <AboutComp>
        <Container>
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
            <Image src={vision} />
            <Text>
              {language === "english"
                ? "Society working together, keeping in mind what's best, both for the community and the environment."
                : "Masyarakat bekerja sama, dengan memperhatikan yang terbaik, baik untuk masyarakat maupun lingkungan."}
            </Text>
          </Pair>
          <Pair>
            <Text>
              {language === "english"
                ? "To provide an engaging, fun, and artistic solution to combat fast fashion and its various impacts on the environment."
                : "Memberikan solusi yang menarik, menyenangkan, dan artistik untuk memerangi fast fashion dan berbagai dampaknya terhadap lingkungan."}
            </Text>
            <Image src={mission} />
          </Pair>
        </Container>
      </AboutComp>
    );
  }

  return (
    <AboutComp>
      <Container>
        <Pair>
          <Image src={vision} />
          <Text>
            {language === "english"
              ? "Society working together, keeping in mind what's best, both for the community and the environment."
              : "Masyarakat bekerja sama, dengan memperhatikan yang terbaik, baik untuk masyarakat maupun lingkungan."}
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
            {language === "english"
              ? "To provide an engaging, fun, and artistic solution to combat fast fashion and its various impacts on the environment."
              : "Memberikan solusi yang menarik, menyenangkan, dan artistik untuk memerangi fast fashion dan berbagai dampaknya terhadap lingkungan."}
          </Text>
          <Image src={mission} />
        </Pair>
      </Container>
    </AboutComp>
  );
};

export default About;