import React from "react";
import styled from "styled-components";

const LanguagePickerComp = styled.ul`
  list-style: none;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  display: flex;
`;

const LanguageOption = styled.li`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
  cursor: pointer;
`;

const Separator = styled.p`
  margin: 0 10px;
  display: flex;
  align-items: center;
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
