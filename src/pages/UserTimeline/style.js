import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  overflow: hidden;

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
    padding-left: 10px;
    margin-top: 157px;
    & > h4 {
      text-overflow: ellipsis;
    }
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
const ContainerNewPosts = styled.div`
  height: 61px;
  width: 100%;
  border-radius: 16px;
  background-color: #1877F2;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    
    height: 19px;
    width: 176px;
    color: #FFFFFF;
    line-height: 20px;
  }
  `;

export { Container, ContainerInfo, MainContainer, ContainerNewPosts };
