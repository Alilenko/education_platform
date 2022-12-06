import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useMomentData } from "../../hooks/useMomentData";
import CalendarHeader from "./CalendarHeader";
import CalendarCell from "./CalendarCell";

const CalendarWrapper = styled.div`
  max-width: 1055px;
  max-height: 811px;
  min-width: 350px;
  background: #ededed;
  border-radius: 20px;
  border: 1px solid #ededed;
  margin: 0 auto;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const WeekHeaderItem = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #eb4436;
  border-right: 1px solid #eb4436;
  padding-left: 20px;
  &:last-child {
    border-right: none;
  }
`;

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const Calendar = () => {
  const { today, setToday, startDay, daysArr, totalDays } = useMomentData(
    moment()
  );

  const prevClick = () => {
    setToday((prev) => prev.clone().subtract(1, "month"));
  };
  const nextClick = () => {
    setToday((prev) => prev.clone().add(1, "month"));
  };

  return (
    <CalendarWrapper>
      <CalendarHeader
        today={today}
        prevClick={prevClick}
        nextClick={nextClick}
      />
      <WeekHeader>
        {weekDays.map((item) => (
          <WeekHeaderItem key={item}>{item}</WeekHeaderItem>
        ))}
      </WeekHeader>
      <Content>
        {daysArr.map((item) => (
          <CalendarCell
            key={item.unix()}
            dayItem={item}
            startDay={startDay}
            today={today}
            totalDays={totalDays}
          />
        ))}
      </Content>
    </CalendarWrapper>
  );
};

export default Calendar;
