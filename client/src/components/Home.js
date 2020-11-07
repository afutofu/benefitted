import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { TimelineLite, Power3 } from "gsap";
import axios from "axios";

import RippleSpinner from "./RippleSpinner";

const HomeComp = styled.section`
  position: relative;
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
  z-index: 0;

  @media only screen and (max-width: 1200px) {
    margin-top: 100px;
  }

  @media only screen and (max-width: 992px) {
    margin-top: 90px;
  }
`;

const GalleryCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #e9e8e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
  padding-bottom: 20px;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-overflow-scrolling: touch;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  padding: 35px 9px;
  padding-bottom: calc(35px - 20px);
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`;

const ImageWrapper = styled.a.attrs((props) => ({
  href: props.href,
  target: "_blank",
  rel: "noreferrer",
}))`
  margin-right: 50px;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 50vh;
  height: 50vh;
  background-color: #e2d6c0;

  transform-origin: center center;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.15);

  :hover {
    box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.25);
  }

  @media only screen and (max-width: 600px) {
    width: 45vh;
    height: 45vh;
  }

  @media only screen and (max-width: 450px) {
    width: 35vh;
    height: 35vh;
  }
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
    opacity: 0;

    @media only screen and (max-width: 992px) {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 992px) {
    height: 70px;
  }
`;

const Home = () => {
  // Initialize references
  let galleryCover = useRef(null);
  let arrow = useRef(null);

  // Initialize states
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);

  // Animation to open gallery cover
  const openGallery = () => {
    let tl = new TimelineLite();

    tl.to(galleryCover.current, {
      y: "-100%",
      duration: 1,
      ease: Power3.easeOut,
    });

    return tl;
  };

  // Animation for prompt arrow
  const arrowEnter = () => {
    let tl = new TimelineLite({ delay: 0.5 });

    tl.to(arrow.current, {
      autoAlpha: 1,
      duration: 1,
    });

    return tl;
  };

  // Retreive posts from API
  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        // Set posts immediately after retreiving data
        setPosts([...res.data]);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      // Open gallery cover and arrow animation 1s after setting posts. Allows images to fully load before gallery opens
      setTimeout(() => {
        setTimeout(() => {
          arrowEnter();
          openGallery();
        }, 200);
        setPostsLoading(false);
      }, 2500);
    }
  }, [posts.length]);

  return (
    <HomeComp id="home">
      <Gallery>
        <GalleryCover ref={galleryCover}>
          {postsLoading && <RippleSpinner />}
        </GalleryCover>
        <ContainerWrapper>
          <Container>
            {posts.map((post) => {
              return (
                <ImageWrapper href={post.permalink}>
                  <Image key={post.id} src={post.media_url} />
                </ImageWrapper>
              );
            })}
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
        <i className="fas fa-chevron-down" ref={arrow}></i>
      </BottomArea>
    </HomeComp>
  );
};

export default Home;
