import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaAngleRight,
  FaUserAlt,
  FaCalendarAlt,
  FaReadme,
  FaGraduationCap,
  FaHotjar,
} from "react-icons/fa";

const PageContainer = styled.div`
  display: flex;
  position: relative;
`;

const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "300px" : "60px")};
  transition: all 0.5s ease-in;
  position: relative;
  @media (max-width: 676px) {
    width: ${(props) => (props.isOpen ? "300px" : "0px")};
  }
`;
const SidebarWrapper = styled.div`
  width: ${(props) => (props.isOpen ? "300px" : "60px")};
  height: 100%;
  border: 1px solid #ededed;
  transition: all 0.5s ease-in;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  @media (max-width: 676px) {
    position: fixed;
    left: ${(props) => (props.isOpen ? 0 : "-300px")};
    z-index: 3;
    width: ${(props) => (props.isOpen ? "300px" : "0px")};
  }
`;

const ToogleBtn = styled.button`
  position: absolute;
  top: 10px;
  right: -20px;
  z-index: 8;
  max-width: 30px;
  border-radius: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  transition: all 0.5s ease-in;
  transform: rotate(${(props) => (props.isOpen ? "180deg" : 0)});
  @media (max-width: 676px) {
    position: fixed;
    top: 10px;
    left: 10px;
    border: 1px solid rgba(3, 3, 3, 0.5);
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 30px;
`;
const LogoText = styled.div`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: red;
  width: ${(props) => (props.isOpen ? "auto" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all 0.5s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const List = styled.ul`
  padding: 10px 0px;
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in;
  color: #8e8e8e;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid transparent;
  text-decoration: none;
  &:hover {
    color: #f8c02e;
    border: 1px solid #f8c02e;
    border-radius: 20px;
  }
  @media (max-width: 676px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-60px")});
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
  }
`;

const ListItemIcon = styled.div``;
const ListItemText = styled.div`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0px 10px;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100px")});
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all 0.5s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const data = [
  {
    name: "Особистий кабінет",
    icon: <FaUserAlt size="20px" />,
    link: "/user",
  },
  {
    name: "Календар",
    icon: <FaCalendarAlt size="20px" />,
    link: "/",
  },
  {
    name: "Новини",
    icon: <FaReadme size="20px" />,
    link: "/news",
  },
  {
    name: "Курси",
    icon: <FaGraduationCap size="20px" />,
    link: "/courses",
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PageContainer>
      <SidebarContainer isOpen={isOpen}>
        <SidebarWrapper isOpen={isOpen}>
          <ToogleBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <FaAngleRight />
          </ToogleBtn>

          <Logo>
            <FaHotjar
              style={{ paddingRight: "10px" }}
              color="#eb4436"
              size="30px"
            />
            <LogoText isOpen={isOpen}>Logo</LogoText>
          </Logo>
          <List>
            {data.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <ListItem isOpen={isOpen}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText isOpen={isOpen}>{item.name}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </SidebarWrapper>
      </SidebarContainer>
      {children}
    </PageContainer>
  );
};

export default Sidebar;
