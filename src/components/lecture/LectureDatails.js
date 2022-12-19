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
  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }
`;
const VideoItem = styled.div`
  width: 70%;
  position: relative;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    height: auto;
    border-bottom: ${({ theme }) => theme.border.primary};
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 123.4%;
  color: #000000;
  padding: 10px;
`;

const Descr = styled.div`
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  color: #0c0c0c;
  padding: 10px;
`;
const VideoList = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    max-height: 30vh;
  }
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
          <>
            <ReactPlayer
              url={currentEvents?.link}
              controls
              height="60vh"
              width="100%"
            />
            <Title>{currentEvents?.title}</Title>
            <Descr>{currentEvents?.description}</Descr>
          </>
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
