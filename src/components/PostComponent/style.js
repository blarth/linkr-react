import styled from "styled-components";

const Container = styled.div`
  height: 276px;
  width: 611px;
  border-radius: 16px;
  background: #171717;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 26.5px;
  margin-right: 18px;

  margin-top: 9px;
`;

const ContainerPost = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .heart {
    width: 23px;
  }
`;

const User = styled.div`
  height: 23px;
  width: 502px;
  font-family: Lato;
  font-size: 19px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  color: #ffffff;
  margin: 20px 0 8px 0;
`;

const Description = styled.div`
  height: 52px;
  width: 502px;
  font-family: Lato;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #b7b7b7;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 23px;
`;

const LikeButton = styled.img`
  width: 23px;

  margin-right: 23px;

  cursor: pointer;
`;

export {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
  LeftContainer,
  LikeButton,
};
