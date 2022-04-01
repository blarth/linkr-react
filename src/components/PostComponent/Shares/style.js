import styled from "styled-components";

const ContainerRepost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 90%;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  cursor: ${(props) => (props.reposterId ? "auto" : "pointer")};
  img {
    width: 23px;
    height: 23px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const ButtonDelete = styled.button`
  all: unset;
  background-color: #1877f2;

  font-family: "Lato";
  width: 134px;
  height: 37px;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 110px;
    font-size: 15px;
  }

  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

const ButtonNotDelete = styled.button`
  all: unset;
  background-color: #ffffff;

  font-family: "Lato";
  width: 134px;
  height: 37px;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 110px;
    font-size: 15px;
  }

  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #1877f2;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  padding-bottom: 15px;
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const TextModal = styled.p`
  font-family: "Lato";
  font-weight: 700;
  font-size: 34px;

  line-height: 41px;
  text-align: center;
  min-width: 280px;
  padding: 15px 70px 0 70px;

  color: #ffffff;

  @media (max-width: 600px) {
    padding: 15px 35px 0 35px;
    font-size: 20px;
    line-height: 28px;
  }
`;

export { ButtonDelete, ButtonNotDelete, Form, TextModal, ContainerRepost };
