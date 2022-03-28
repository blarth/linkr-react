import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow: hidden;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }

  h3 {
    height: 64px;

    font-family: "Oswald", sans-serif;
    font-size: 43px;
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
    text-align: left;
    color: #ffffff;
    align-self: flex-start;
    @media (max-width: 600px) {
      align-self: flex-start;
      width: 100%;
    }
  }
`;
const ContainerInfo = styled.div`
  margin-top: 110px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 158px;

    font-size: 33px;

    & > h4 {
      text-overflow: ellipsis;
    }
  }
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export { Container, ContainerInfo, MainContainer };
