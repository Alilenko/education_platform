import React from "react";

import Schedule from "../components/schedule/Schedule";
import Header from "../components/header/Header";

const SchedulePage = () => {
  return (
    <Header name="Розклад занять">
      <Schedule />
    </Header>
  );
};

export default SchedulePage;
