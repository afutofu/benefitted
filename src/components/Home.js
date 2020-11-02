import React from "react";
import styled, { keyframes } from "styled-components";

const HomeComp = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Gallery = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 150px;
  background-color: rgba(255, 255, 255, 0.3);
`;

const GalleryContainer = styled.div`
  width: 90%;
  height: 100%;
  padding: 35px 9px;
  margin: 0 5%;
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
        <GalleryContainer>Gallery</GalleryContainer>
      </Gallery>
      <BottomArea>
        <i className="fas fa-chevron-down"></i>
      </BottomArea>
    </HomeComp>
  );
};

export default Home;
