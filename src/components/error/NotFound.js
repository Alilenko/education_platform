import React from "react";
import Sidebar from "../sidebar/Sidebar";
import img from "./fatal.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const NavButton = styled.div`
  margin-top: 10px;
  color: white;
  text-decoration: none;
  background-color: #eb4436;
  border-radius: 20px;
  padding: 10px 20px;
  text-transform: uppercase;
`;

const NotFound = () => {
  return (
    <Sidebar>
      <ErrorWrapper>
        <img src={img} alt="not found" />
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            marginBottom: 10,
          }}
        >
          Opps... Something went wrong
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavButton>До головної</NavButton>
        </Link>
      </ErrorWrapper>
    </Sidebar>
  );
};

export default NotFound;
