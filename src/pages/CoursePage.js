import React from "react";
import LectureDatails from "../components/lecture/LectureDatails";
import Header from "../components/header/Header";

const CoursePage = () => {
  return (
    <Header name="Лекція">
      <LectureDatails />
    </Header>
  );
};

export default CoursePage;
