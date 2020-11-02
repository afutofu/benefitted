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
  height: 70vh;
  margin-top: 150px;
  background-color: rgba(255, 255, 255, 0.3);
  overflow: hidden;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  padding-bottom: 20px;
  box-sizing: content-box;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  padding: 35px 9px;
  padding-bottom: calc(35px - 20px);
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

    :hover {
      color: grey;
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
  height: calc(30vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 25px;
    cursor: pointer;
    animation: ${upAndDown} 2.5s infinite;
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
