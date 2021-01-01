import React from "react";
import styled from "styled-components";

const OrderComp = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20vh 0;
`;

const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

const Title = styled.h1`
  text-transform: capitalize;
`;

const Instructions = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
`;

const Instruction = styled.li`
  margin: 0;
  margin-bottom: 15px;
  line-height: 1.4em;
  padding-left: 5px;

  :last-child {
    margin: 0;
  }
`;

const Order = () => {
  return (
    <OrderComp id="order">
      <Container>
        <Title>How To Order</Title>
        <Instructions>
          <Instruction>Go to instagram.</Instruction>
          <Instruction>
            <Instructions type="a">
              <Instruction>
                DM us informing your shoe type and what design you would like.
              </Instruction>
              <Instruction>
                If you don't have a design, you can ask for a theme. We will
                help make the design with you.
              </Instruction>
            </Instructions>
          </Instruction>
          <Instruction>
            Once you are satisfied with our design, we can start discussing
            price.
          </Instruction>
          <Instruction>
            You will receive an order form and start booking a slot. To book a
            slot, you will need to pay at least 50% of the price of your order.
          </Instruction>
          <Instruction>
            Once transferred, send your shoe to our address a minimum of 3 days
            prior to slot date.
          </Instruction>
          <Instruction>
            We will send you a picture of after we have finished painting,
            ensuring you are satisfied with the quality. If you want changes in
            the design, you will have to pay accordingly.
          </Instruction>
          <Instruction>
            Once your payment is received, we will pack your shoe and send it
            off. We will send your tracking number (Nomor Resi). Will be sent H
            + 1 after delivery.
          </Instruction>
        </Instructions>
      </Container>
    </OrderComp>
  );
};

export default Order;
