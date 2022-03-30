import styled from "styled-components";

const EditButton = styled.button`
  all: unset;
  cursor: pointer;

  position: absolute;
  top: 10px;
  right: 30px;

  @media (max-width: 600px) {
    right: 40px;
    top: 18px;
  }
  @media (max-width: 420px) {
    right: 80px;
  }
  @media (max-width: 350px) {
    right: 105px;
  }
  @media (max-width: 300px) {
    right: 150px;
  }
`;
const EditInput = styled.textarea`
  all: unset;
  width: 503px;
  border-radius: 7px;
  background-color: ${(props) => (props.isDisabled ? "#ccc" : "#fff")};
  color: #4c4c4c;
  font-family: Lato;
  font-weight: 400;
  font-size: 14px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export { EditButton, EditInput };
