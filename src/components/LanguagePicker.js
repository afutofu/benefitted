import React from "react";
import styled from "styled-components";

const LanguagePickerComp = styled.ul`
  padding: 0;
  list-style: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  @media only screen and (max-width: 992px) {
    margin: 0 5px;
  }
`;

const LanguageOption = styled.li`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Separator = styled.p`
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-size: 18px;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 14px;
    margin: 0 5px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const LanguagePicker = () => {
  return (
    <LanguagePickerComp>
      <LanguageOption>en</LanguageOption>
      <Separator>/</Separator>
      <LanguageOption>id</LanguageOption>
    </LanguagePickerComp>
  );
};

export default LanguagePicker;
