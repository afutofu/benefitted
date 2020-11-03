import React, { useContext } from "react";
import styled from "styled-components";

import { LanguageContext } from "../LanguageContext";

const BookSlotComp = styled.section`
  width: 100%;
  height: 100%;
  padding: 20vh 0;
  padding-bottom: 30vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 992px) {
    padding: 15vh 0;
    padding-bottom: 30vh;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
`;

const Slots = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Slot = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #707070;
  border-radius: 15px;
  margin-right: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 992px) {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
`;

const InfoArea = styled.div`
  width: 35%;
  height: 100%;
`;

const InfoTitle = styled.h3`
  font-size: 26px;
  margin: 0;

  @media only screen and (max-width: 992px) {
    font-size: 20px;
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.5em;
  margin-bottom: 20px;

  @media only screen and (max-width: 992px) {
    font-size: 14px;
  }
`;

const BookSlot = () => {
  const [language] = useContext(LanguageContext);
  const date = new Date();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const getMonthName = (monthIndex) => {
    if (language === "english") {
      switch (monthIndex) {
        case 0:
          return "January";
        case 1:
          return "February";
        case 2:
          return "March";
        case 3:
          return "April";
        case 4:
          return "May";
        case 5:
          return "June";
        case 6:
          return "July";
        case 7:
          return "August";
        case 8:
          return "September";
        case 9:
          return "October";
        case 10:
          return "November";
        case 11:
          return "December";
        default:
          break;
      }
    }

    switch (monthIndex) {
      case 0:
        return "Januari";
      case 1:
        return "Februari";
      case 2:
        return "Maret";
      case 3:
        return "April";
      case 4:
        return "Mei";
      case 5:
        return "Juni";
      case 6:
        return "Juli";
      case 7:
        return "Agustus";
      case 8:
        return "September";
      case 9:
        return "Oktober";
      case 10:
        return "November";
      case 11:
        return "Desember";
      default:
        break;
    }
  };

  // Month here is 1-indexed (January is 1, February is 2, etc). This is
  // because we're using 0 as the day so that it returns the last day
  // of the last month, so you have to add 1 to the month number
  // so it returns the correct amount of days
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const monthName = getMonthName(monthIndex);
  const numDays = daysInMonth(monthIndex + 1, year);

  let slots = [];
  for (let i = 0; i < numDays; i++) {
    slots.push(<Slot key={i} />);
  }

  return (
    <BookSlotComp>
      <Container>
        <Slots>{slots}</Slots>
        <InfoArea>
          <InfoTitle>{monthName}</InfoTitle>
          <InfoText>
            {language === "english"
              ? "We're not open all the time, these are our available slots for now."
              : "Kami tidak buka setiap saat, ini adalah slot yang tersedia untuk saat ini."}
          </InfoText>
          <InfoText>
            {language === "english"
              ? "Look at the empty slots and send us a DM on Instagram."
              : "Lihat slot kosong dan kirimkan DM di Instagram."}
          </InfoText>
          <InfoText>
            {language === "english"
              ? "We'll get back to you as soon as we can."
              : "Kami akan menghubungi Anda kembali secepat kami bisa."}
          </InfoText>
        </InfoArea>
      </Container>
    </BookSlotComp>
  );
};

export default BookSlot;
