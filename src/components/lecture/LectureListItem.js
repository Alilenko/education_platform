import React from "react";
import styled from "styled-components";

const LectureItem = styled.button`
  text-decoration: none;
  color: #000;
  padding: 10px;
  cursor: pointer;
  text-align: start;
  border: none;
  transition: ${({ theme }) => theme.transition.primary};
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.bg : "#fff"};
`;

const LectureListItem = ({ item, index, active, onClick }) => {
  return (
    <LectureItem onClick={() => onClick(item.id)} active={active}>
      {index + 1}. {item.title}
    </LectureItem>
  );
};

export default LectureListItem;
