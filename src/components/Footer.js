import React from "react";
import styled from "styled-components";

const FooterComp = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #e2d6c0;
  border-top: 1px solid #d3c092;
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.3);

  i {
    position: absolute;
    right: 0px;
    color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterComp>
      <Container>
        &#169; 2020 Benefitted. All rights reserved
        <i class="fas fa-sign-in-alt"></i>
      </Container>
    </FooterComp>
  );
};

export default Footer;
