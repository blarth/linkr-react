import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  overflow: hidden;

  h3 {
    width: 100%;
    height: 300px;

    font-family: "Oswald", sans-serif;

    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;

    color: #ffffff;
    align-self: flex-start;

    overflow-x: visible;

    margin-left: 40px;
    @media (max-width: 380px) {
      margin-left: 20px;
    }
  }
`;
const ContainerInfo = styled.div`
  margin-top: 110px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    font-size: 33px;
    padding-left: 12px;

    margin-top: 180px;
    & > h4 {
      text-overflow: ellipsis;
    }
    position: relative;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: sticky;
  top: ${(props) => (props.allowFollow ? "110px" : "220px")};

  @media (max-width: 1000px) {
    height: 31px;

    position: absolute;
    top: 140px;
    right: 0;

    display: block;
  }
  @media (max-width: 600px) {
    top: 135px;
    left: 10px;
  }
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  @media (max-width: 600) {
    width: 100%;
  }
`;
const FollowButton = styled.button`
  all: unset;

  margin-bottom: 45px;

  border-radius: 5px;

  background-color: ${(props) =>
    props.followType === "follow" ? "#1877f2" : "white"};

  width: 112px;
  height: 31px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Lato";
  font-weight: 700;
  font-size: 14px;
  color: white;

  color: ${(props) => (props.followType === "follow" ? "white" : "#1877f2")};

  cursor: pointer;

  @media (max-width: 850px) {
    position: absolute;
    top: 15px;
    right: 12px;
  }
  @media (max-width: 630px) {
    width: 70px;
    height: 25px;
  }
`;

export {
  Container,
  ContainerInfo,
  MainContainer,
  RightContainer,
  FollowButton,
};
