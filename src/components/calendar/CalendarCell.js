import React from "react";
import styled from "styled-components";
import { isCurrentDay, isSelectedMonth } from "../../helpers";

export const CellWrapper = styled.div`
  min-height: 94px;
  border: 1px solid ${(props) => (props.isWeekday ? "#ededed" : "#fff")};
  background-color: ${(props) => props.isWeekday && "#fff"};
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;

const DayWrapper = styled.div`
  height: 31px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  margin: 2px;
  color: ${(props) => props.color};
  cursor: pointer; ;
`;

const CurrentDay = styled("div")`
  height: 100%;
  width: 31px;
  background-color: #eb4436;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarCell = ({ dayItem, today }) => {
  return (
    <CellWrapper isWeekday={dayItem.day() === 6 || dayItem.day() === 0}>
      <RowInCell>
        <DayWrapper
          color={isSelectedMonth(dayItem, today) ? "black" : "#b4b4b4"}
        >
          {isCurrentDay(dayItem) ? (
            <CurrentDay>{dayItem.format("D")}</CurrentDay>
          ) : (
            dayItem.format("D")
          )}
        </DayWrapper>
      </RowInCell>
    </CellWrapper>
  );
};

export default CalendarCell;
