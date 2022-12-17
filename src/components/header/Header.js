import React from "react";
import styled from "styled-components";
import moment from "moment";
import { FaBell, FaBook } from "react-icons/fa";
import img from "../../assets/My-photo.jpg";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${({ theme }) => theme.media.mobile} {
    width: auto;
    justify-content: flex-end;
  }
`;

const HeaderWrapper = styled.div`
  height: 74px;
  width: 80%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    justify-content: flex-end;
  }
`;

const HeaderLeft = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #020202;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Date = styled.div`
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const IconBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  cursor: pointer;
`;
const Push = styled.div`
  position: absolute;
  top: -10px;
  right: 8px;
  padding: 2px 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100%;
  color: #fff;
  font-size: 10px;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const Avatar = styled.div`
  margin: 0 10px;
  object-fit: contain;
  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
const Student = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #020202;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
const Status = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #838383;
`;

const notification = [{ id: 1 }];

const Header = ({ children, name }) => {
  const data = moment().format("dddd, D MMMM YYYY");

  return (
    <PageWrapper>
      <HeaderWrapper>
        <HeaderLeft>{name}</HeaderLeft>
        <HeaderRight>
          <Date>{data}</Date>
          <IconBtn>
            <FaBell size="20px" style={{ margin: "0 10px" }} />
            <Push active={notification.length}>{notification.length}</Push>
          </IconBtn>
          <IconBtn>
            <FaBook size="20px" />
          </IconBtn>
          <Avatar img={img}>
            <img
              src={img}
              width="35px"
              height="35px"
              alt="avatar"
              style={{ borderRadius: "100%" }}
            />
          </Avatar>
          <Student>
            Аліна Павленко <Status>учень</Status>
          </Student>
        </HeaderRight>
      </HeaderWrapper>
      {children}
    </PageWrapper>
  );
};

export default Header;
