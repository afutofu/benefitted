import React, { useContext } from "react";
import styled from "styled-components";

import { LanguageContext } from "../LanguageContext";

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
  position: relative;
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
  margin: 0 5px;
  display: flex;
  align-items: center;
  font-size: 18px;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 14px;
    margin: 0 2px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const UnderlineWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  width: calc(100% - 10px);
  height: 4px;
  overflow: hidden;
  opacity: ${(props) => (props.selected ? "1" : "0")};
`;

const Underline = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d3c092;
`;

const LanguagePicker = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <LanguagePickerComp>
      <LanguageOption onClick={() => setLanguage("english")}>
        en
        <UnderlineWrapper selected={language === "english"}>
          <Underline />
        </UnderlineWrapper>
      </LanguageOption>
      <Separator>/</Separator>
      <LanguageOption onClick={() => setLanguage("indonesian")}>
        id
        <UnderlineWrapper selected={language === "indonesian"}>
          <Underline />
        </UnderlineWrapper>
      </LanguageOption>
    </LanguagePickerComp>
  );
};

export default LanguagePicker;
