import React from "react";
import styled, { keyframes } from "styled-components";

const HomeComp = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Gallery = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 120px;
  background-color: rgba(255, 255, 255, 0.25);
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    margin-top: 100px;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 90px;
  }
`;

const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  padding-bottom: 25px;
  box-sizing: content-box;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  padding: 35px 9px;
  padding-bottom: calc(35px - 25px);
  margin: 0 5%;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

const Image = styled.div`
  min-width: 50vh;
  min-height: 50vh;
  background-color: #e2d6c0;
  margin-right: 50px;
  transform-origin: center center;
  /* margin-bottom: 50px; */
`;

const Prompt = styled.div`
  width: 100px;
  padding-right: 50px;
  text-align: center;
  line-height: 1.5em;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;

    :hover {
      color: grey;
    }

    @media only screen and (max-width: 992px) {
      font-size: 14px;
    }
  }
`;

const upAndDown = keyframes`{
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(5px);
    }
    20% {
      transform: translateY(8px);
    }
    25% {
      transform: translateY(-2px);
    }
    30% {
      transform: translateY(2px);
    }
    40%{
        transform: translateY(-1px);
    }
    50%,
    100% {
      transform: translateY(0px);
    }
  }`;

const BottomArea = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    position: relative;
    font-size: 25px;
    animation: ${upAndDown} 2.5s infinite;

    @media only screen and (max-width: 992px) {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 992px) {
    height: 70px;
  }
`;

const Home = () => {
  return (
    <HomeComp>
      <Gallery>
        <ContainerWrapper>
          <Container>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Prompt>
              <a
                href="https://www.instagram.com/benefitted.id/"
                target="_blank"
                rel="noreferrer"
              >
                Check our instagram for more!
              </a>
            </Prompt>
          </Container>
        </ContainerWrapper>
      </Gallery>
      <BottomArea>
        <i className="fas fa-chevron-down"></i>
      </BottomArea>
    </HomeComp>
  );
};

export default Home;
