import React from "react";
import styled from "styled-components";
import { useTranslateMonth } from "../../hooks/useTranslateMonth";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Button = styled.button`
  background-color: #eb4436;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
`;
const PrevBtn = styled(Button)`
  transform: rotate(180deg);
`;
const Month = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #eb4436;
`;

const CalendarHeader = ({ today, prevClick, nextClick }) => {
  const { name } = useTranslateMonth(today.month());

  return (
    <Container>
      <PrevBtn onClick={prevClick}>
        <AiOutlineDoubleRight color="#fff" size={10} />
      </PrevBtn>
      <Month>
        {name} {today.format("YYYY")}
      </Month>
      <Button onClick={nextClick}>
        <AiOutlineDoubleRight color="#fff" size={10} />
      </Button>
    </Container>
  );
};

export default CalendarHeader;
