import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  overflow: hidden;

  h3 {
    height: 64px;

    font-family: Oswald;
    font-size: 43px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    font-family: Oswald;
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
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
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
