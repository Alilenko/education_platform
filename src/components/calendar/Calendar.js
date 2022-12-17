import React from "react";
import styled from "styled-components";
import CalendarHeader from "./CalendarHeader";
import CalendarCell from "./CalendarCell";
import Spinner from "../Spinner/Spinner";

const CalendarWrapper = styled.div`
  max-height: 811px;
  width: 600px;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.bg};
  margin: 0 auto;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    min-width: 320px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(40px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  position: relative;
`;
const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(40px, 1fr));
`;
const WeekHeaderItem = styled.div`
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.secondary};
  border-right: ${({ theme }) => theme.border.secondary};
  padding-left: 20px;
  &:last-child {
    border-right: none;
  }
  @media ${({ theme }) => theme.media.mobile} {
    font-size: 14px;
  }
`;

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const Calendar = ({
  today,
  setToday,
  prevClick,
  nextClick,
  startDay,
  totalDays,
  events,
  daysArr,
  setActive,
  loading,
}) => {
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
        {loading && <Spinner />}
        {daysArr.map((item) => (
          <CalendarCell
            key={item.unix()}
            dayItem={item}
            startDay={startDay}
            today={today}
            setToday={setToday}
            totalDays={totalDays}
            events={events}
            setActive={setActive}
          />
        ))}
      </Content>
    </CalendarWrapper>
  );
};

export default Calendar;
