import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { useFilterEvents } from "../../hooks/useEvents";
import arrow from "../../assets/right-arrow 2.svg";

const DayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 80vw;
    min-width: 320px;
  }
`;
const DayName = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
  color: #000000;
`;
const RightColumn = styled.div`
  display: flex;
`;
const ArrowButton = styled.button`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 5px 10px;
  border: none;
`;
const Circle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: ${(props) => props.left && 0};
  width: 31px;
  height: 31px;
  background-color: #f8c02e;
  border-radius: 100%;
  z-index: -1;
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
  @media ${({ theme }) => theme.media.mobile} {
    width: 80vw;
    min-width: 320px;
  }
`;
const EventsItem = styled(Link)`
  height: 64px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
  color: #000;
  text-decoration: none;
  padding: 5px 20px;
  border: 1px solid ${({ theme }) => theme.colors.bg};
  &:nth-child(2n + 1) {
    background-color: #fff;
  }
`;
const EventsTime = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const EventsText = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-left: 20px;
`;

const DaySchedule = ({ today, prevClick, nextClick, events }) => {
  const { eventsDay } = useFilterEvents(events, today);

  return (
    <>
      <DayHeader>
        <DayName>{today.format("D MMMM")}</DayName>
        <RightColumn>
          <ArrowButton onClick={() => prevClick("days")}>
            <img
              style={{ marginRight: "20px", transform: `rotate(180deg)` }}
              src={arrow}
            />
          </ArrowButton>
          <ArrowButton onClick={() => nextClick("days")}>
            ????????????
            <img style={{ paddingLeft: "5px" }} src={arrow} />
            <Circle />
          </ArrowButton>
        </RightColumn>
      </DayHeader>
      <EventsWrapper>
        {eventsDay.length ? null : (
          <EventsItem>
            <EventsText>???????????? ???? ????????????????????????!</EventsText>
          </EventsItem>
        )}
        {eventsDay.map((item) => {
          const time = moment.unix(item.date).format("HH:mm");
          return (
            <EventsItem
              id={item.id}
              to={`/education_platform/lecture/${item.id}`}
              key={item.id}
            >
              <EventsTime>{time}</EventsTime>
              <EventsText>{item.title}</EventsText>
            </EventsItem>
          );
        })}
      </EventsWrapper>
    </>
  );
};

export default DaySchedule;
