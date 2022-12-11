import React from "react";
import styled from "styled-components";
import { isCurrentDay, isSelectedMonth } from "../../helpers";
import { useFilterEvents } from "../../hooks/useEvents";

export const CellWrapper = styled.div`
  min-height: 94px;
  height: 100px;
  max-width: 151px;
  border: 1px solid ${(props) => (props.isWeekday ? "#ededed" : "#fff")};
  background-color: ${(props) => props.isWeekday && "#fff"};
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
  width: 100%;
  height: 100%;
`;

const DayWrapper = styled.button`
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 9px;
  margin: 2px;
  color: ${(props) => props.color};
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const CurrentDay = styled("div")`
  height: 100%;
  width: 25px;
  background-color: #eb4436;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EventsWrapper = styled.div`
  max-height: 90px;
  overflow: scroll;
`;
const EventsButton = styled.button`
  border: none;
  background-color: ${(props) =>
    (props.lecture && "rgba(60, 179, 113, 0.6)") ||
    (props.live && "rgba(255, 99, 71, 0.6)")};

  border-radius: 20px;
  max-width: 150px;
  width: 100%;
  overflow: hidden;
  padding: 1px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  cursor: pointer;
`;

const CalendarCell = ({ dayItem, today, setToday, events, setActive }) => {
  const { eventsDay } = useFilterEvents(events, dayItem);

  const selectedDay = () => {
    setToday(dayItem);
    setActive("day");
  };

  return (
    <CellWrapper isWeekday={dayItem.day() === 6 || dayItem.day() === 0}>
      <RowInCell>
        <DayWrapper
          color={isSelectedMonth(dayItem, today) ? "black" : "#b4b4b4"}
          onClick={selectedDay}
        >
          {isCurrentDay(dayItem) ? (
            <CurrentDay>{dayItem.format("D")}</CurrentDay>
          ) : (
            dayItem.format("D")
          )}
        </DayWrapper>
        <EventsWrapper>
          {eventsDay.map((item, i) => (
            <EventsButton
              lecture={item.type === "lecture"}
              live={item.type === "live"}
              key={i}
            >
              {item.title}
            </EventsButton>
          ))}
        </EventsWrapper>
      </RowInCell>
    </CellWrapper>
  );
};

export default CalendarCell;
