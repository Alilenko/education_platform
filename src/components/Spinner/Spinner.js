import React from "react";
import styled from "styled-components";
import spinner from "./spinner.svg";

const SpinnerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const SpinnerItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

const Spinner = () => {
  return (
    <SpinnerItem>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "100px" }} src={spinner} alt="spinner" />
      </div>
    </SpinnerItem>
  );
};

export default Spinner;
