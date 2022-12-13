import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Calendar from "../calendar/Calendar";
import DaySchedule from "./DaySchedule";
import { useMomentData } from "../../hooks/useMomentData";
import useEvents from "../../hooks/useEvents";

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1055px;
  min-width: 560px;
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  color: #000000;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #fff;
  border: 1px solid ${(props) => (props.active ? "#eb4436" : "#8E8E8E")};
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px;
  color: ${(props) => (props.active ? "#eb4436" : "#8E8E8E")};
`;

const Schedule = () => {
  const [active, setActive] = useState("month");
  const [events, setEvents] = useState([]);
  const {
    today,
    setToday,
    startDay,
    daysArr,
    totalDays,
    startDateQuery,
    endDateQuery,
  } = useMomentData();
  const { getEvents, loading } = useEvents();

  const prevClick = (method) => {
    setToday((prev) => prev.clone().subtract(1, method));
  };
  const nextClick = (method) => {
    setToday((prev) => prev.clone().add(1, method));
  };
  useEffect(() => {
    getEvents(startDateQuery, endDateQuery).then((res) => setEvents(res));
  }, [today]);

  return (
    <ScheduleWrapper>
      <Title>Графік занять</Title>
      <Buttons>
        <Button active={active === "day"} onClick={() => setActive("day")}>
          День
        </Button>
        <Button active={active === "month"} onClick={() => setActive("month")}>
          Місяць
        </Button>
      </Buttons>
      {active === "month" ? (
        <Calendar
          today={today}
          setToday={setToday}
          prevClick={prevClick}
          nextClick={nextClick}
          startDay={startDay}
          totalDays={totalDays}
          events={events}
          daysArr={daysArr}
          setActive={setActive}
          loading={loading}
        />
      ) : (
        <DaySchedule
          today={today}
          setToday={setToday}
          prevClick={prevClick}
          nextClick={nextClick}
          events={events}
        />
      )}
    </ScheduleWrapper>
  );
};

export default Schedule;
