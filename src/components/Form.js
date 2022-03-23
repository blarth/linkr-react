import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100vh;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  width: 65%;
  height: 100vh;

  background-color: #151515;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

  div {
    text-align: left;
    font-family: "Oswald";
    font-weight: bold;
    color: white;
    width: 50%;

    word-wrap: break-word;
    p {
      font-size: 43px;
    }
    h1 {
      font-size: 106px;
      font-family: "Passion One";
    }
  }
  @media (max-width: 1300px) {
    height: 200px;

    padding: 20px;

    margin-bottom: 40px;

    width: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        font-size: 23px;
      }
      h1 {
        font-size: 76px;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 40%;

  margin-bottom: 20px;
  font-family: "Oswald", "sans-serif";

  @media (max-width: 1300px) {
    width: 60%;
  }
`;
const Input = styled.input`
  all: unset;
  width: 429px;

  padding: 12px 0 12px 6px;
  margin-bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  color: #9f9f9f;
  font-size: 27px;
  font-weight: 700;

  background-color: white;

  cursor: text;
  @media (max-width: 1300px) {
    width: 340px;
  }
`;
const Button = styled.button`
  all: unset;

  width: 429px;
  height: 65px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1877f2;

  color: white;
  font-size: 27px;
  font-weight: 700;

  border-radius: 6px;

  cursor: pointer;

  :hover {
    font-size: 26px;
  }

  @media (max-width: 1300px) {
    width: 340px;
  }
`;
const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;

  margin-top: 25px;

  font-weight: 400;
  font-size: 20px;

  font-family: "Lato", sans-serif;

  text-decoration: underline;

  @media (max-width: 1300px) {
    font-size: 16px;
    text-align: center;
  }
`;

export { Container, LeftContainer, Form, Input, Button, StyledLink };
