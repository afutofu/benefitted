import React from "react";
import styled from "styled-components";
import parse from "react-html-parser";

const FAQComp = styled.section`
  width: 100%;
  height: 100%;
  min-height: 800px;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QA = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 45px;
  font-size: 14px;

  @media only screen and (max-width: 1200px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 12px;
  }
`;

const Question = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Answer = styled.p`
  line-height: 1.7em;
  margin: 0;

  a {
    box-sizing: border-box;
    text-decoration: none;
    color: black;
    font-weight: 500;
    border-bottom: #d3c092 4px solid;

    :hover {
      border-bottom: #e2d6c0 4px solid;
    }
  }
`;

const qas = [
  {
    question: "Do we need to get the shoes ourselves ?",
    answer:
      "Yes, you can send in your own shoes or we can purchase new ones for you (by request).",
  },
  {
    question: "Where do you buy the shoes ?",
    answer:
      "We source the shoes from reputable sellers - <a href='https://www.instagram.com/bootsdept_id/' target='blank'>@bootsdept_id</a>, <a href='https://www.instagram.com/807garage.id/' target='blank'>@807garage.id</a>, <a href='https://www.instagram.com/shoebite_/' target='blank'>@shoebite_</a> - that  guarantees authentic shoes.",
  },
  {
    question: "What are the prices for the shoes ?",
    answer:
      "Our customs start at Rp.175,000 for the simplest designs and go up with harder designs. DM us for a more detailed price list.",
  },
  {
    question: "Do you ship internationally ?",
    answer:
      "For now, we only ship within Indonesia. Hopefully in the future though!",
  },
  {
    question: "Can I request my own pictures to custom ?",
    answer:
      "Yes, we can make a digital design for you. Just send us a reference pic and we'll work on it.",
  },
  {
    question: "Do you accept things other than shoes? Like bags or wallets ?",
    answer:
      "Yep. We accept shoes, bags and wallets as long as they're leather / canvas.",
  },
  {
    question: "What type of shoes do you accept ?",
    answer: "We accept any LEATHER and CANVAS shoes.",
  },
  {
    question: "How do we book a slot ?",
    answer:
      "We'll book a slot for you once you've confirmed your design and filled out the order format. We update the availability of our slots per week on our <a href='https://www.instagram.com/benefitted.id/' target='blank'>instagram bio</a>. So keep an eye on that and book yours before its over!",
  },
  {
    question: "How much are reflectives ?",
    answer:
      "Our reflectives start at Rp.200,000, and painted customs are more expensive with harder designs.",
  },
  {
    question: "Do you sell beads separately ?",
    answer: "Yes we do! Just DM us the words and color scheme that you want.",
  },
];

const FAQ = () => {
  return (
    <FAQComp>
      <Container>
        {qas.map((qa, i) => {
          return (
            <QA key={i}>
              <Question>{qa.question}</Question>
              <Answer>{parse(qa.answer)}</Answer>
            </QA>
          );
        })}
      </Container>
    </FAQComp>
  );
};

export default FAQ;
