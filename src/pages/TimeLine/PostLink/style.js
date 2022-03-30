import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;

  width: 611px;
  height: 209px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    width: 100%;
    height: 190px;
  }
  @media (max-width: 480px) {
    border-radius: 0;
  }

  display: flex;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const Img = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;

  @media (max-width: 600px) {
    display: none;
  }
  border-radius: 50%;
  margin: 18px;
`;

const Form = styled.form`
  width: 100%;
  margin-right: 25px;
  @media (max-width: 600px) {
    margin-left: 22px;
  }
  p {
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    @media (max-width: 600px) {
      font-size: 17px;
      text-align: center;
    }

    color: #707070;
    margin-top: 21px;
  }
  input {
    all: unset;
    box-sizing: border-box;
    background: #efefef;
    border-radius: 5px;
    border: none;

    padding-left: 10px;

    width: 100%;
  }
  input::placeholder {
    font-family: "Lato";
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    color: #949494;
  }
  .link {
    height: 30px;
    margin-top: 10px;
  }
  .description {
    height: 66px;
    margin-top: 5px;
    @media (max-width: 600px) {
      height: 47px;
    }
  }
  div {
    display: flex;
    justify-content: end;
    margin: 9px 0 12px 0;
  }
  button {
    color: #ffffff;
    background: #1877f2;
    border-radius: 5px;

    font-family: "Lato";
    font-weight: 700;
    font-size: 14px;

    border: none;

    width: 112px;
    height: 31px;
    margin-top: 5px;

    cursor: pointer;

    @media (max-width: 600px) {
      height: 22px;
      font-size: 13px;
    }
  }
`;

export { Container, Form, Img };
