import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useEvents from "../../hooks/useEvents";
import styled from "styled-components";
import ReactPlayer from "react-player";
import LectureListItem from "./LectureListItem";
import Spinner from "../Spinner/Spinner";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const VideoItem = styled.div`
  width: 70%;
  position: relative;
  height: 60vh;
`;
const VideoList = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
`;

const LectureDatails = () => {
  const [currentEvents, setCurrentEvents] = useState();
  const [events, setEvents] = useState([]);
  const { getEvents, loading, getEvent } = useEvents();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEvents().then((res) => setEvents(res));
    if (id) {
      getEvent(id).then((result) => setCurrentEvents(result));
    }
  }, [id]);

  const changeLecture = (id) => {
    navigate(`/education_platform/lecture/${id}`);
  };

  return (
    <Wrapper>
      <VideoItem>
        {loading ? (
          <div style={{ height: "60vh", width: "100%" }}>
            <Spinner />
          </div>
        ) : (
          <ReactPlayer
            url={currentEvents?.link}
            controls
            height="60vh"
            width="100%"
          />
        )}
      </VideoItem>
      <VideoList>
        {events.map((item, index) => (
          <LectureListItem
            key={item.id}
            item={item}
            index={index}
            onClick={changeLecture}
            active={item.id == currentEvents?.id}
          />
        ))}
      </VideoList>
    </Wrapper>
  );
};

export default LectureDatails;
