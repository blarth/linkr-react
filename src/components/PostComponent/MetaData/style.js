import styled from "styled-components";

const Container = styled.div`
  height: 155px;
  width: 503px;
  border-radius: 11px;
  color: #c4c4c4;
  border: 1px solid #4d4d4d;
  box-sizing: border-box;
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  word-wrap: break-word;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 115px;
    width: 278px;
    gap: 40px;
  }

  h1 {
    height: 38px;
    width: 249px;
    margin-bottom: 5px;
    @media (max-width: 600px) {
      height: 26px;
      width: 138.15px;
      overflow: hidden;
      margin-left: 11px;
    }
  }

  border-radius: 11px;
  border: 1px solid #4d4d4d;

  box-sizing: border-box;

  font-family: "Lato";

  font-weight: 400;
  line-height: 13px;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;

  word-wrap: break-word;

  cursor: pointer;
  @media (max-width: 600px) {
    width: 288px;
    height: 115px;
  }

  h1 {
    margin-bottom: 5px;
    color: #cecece;
    font-size: 16px;
    max-width: 300px;
    @media (max-width: 600px) {
      overflow: hidden;
      margin-left: 11px;
      font-size: 11px;
    }
  }

  p {
    margin-bottom: 13px;
    font-size: 11px;
    color: #9b9595;
    max-width: 300px;
    @media (max-width: 600px) {
      overflow: hidden;

      font-size: 9px;
    }
  }

  h2 {
    font-size: 11px;
    color: #cecece;
    max-width: 330px;
    @media (max-width: 600px) {
      overflow: hidden;

      font-size: 9px;
    }
  }

  img {
    height: 150px;
    max-width: 153px;
    border-radius: 0px 12px 13px 0px;
    @media (max-width: 600px) {
      height: 112px;
      width: 95px;
    }
  }
`;
const LeftContainer = styled.div`
  width: 90%;
  height: 90%;

  max-width: 348px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding-left: 19px;
  padding-right: 27px;
  @media (max-width: 600px) {
    padding-left: 5px;
    max-width: 160px;
  }
`;

export { Container, LeftContainer };
