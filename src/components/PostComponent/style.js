import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 290px;
  width: 611px;

  border-radius: 16px;

  background: #171717;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 20px;

  padding: 12px;
  @media (max-width: 600px) {
    width: 100%;
    height: 250px;
  }
  @media (max-width: 480px) {
    border-radius: 0;
  }
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;

  background: #171717;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

const ContainerPost = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const User = styled.div`
  height: 23px;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-size: 19px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  color: #ffffff;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 23px;

  @media (max-width: 420px) {
    margin-left: 45px;
  }
  @media (max-width: 350px) {
    margin-left: 80px;
  }
  @media (max-width: 300px) {
    margin-left: 105px;
  }
`;
const RightContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  width: 503px;

  @media (max-width: 600px) {
    width: 340px;
  }
`;

const Description = styled.div`
  min-height: 52px;
  width: 502px;
  font-family: "Lato", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #b7b7b7;

  @media (max-width: 600px) {
    min-height: 52px;
    width: 288px;
  }
`;
const InfoLikes = styled.span`
  height: 13px;
  width: 50px;
  color: #ffffff;
  font-family: Lato;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
`;

const StyledHashtag = styled(Link)`
  font-weight: 700;
  color: #fff;
`;
const LikeButton = styled.img`
  width: 23px;
  cursor: pointer;
`;

const PostManagementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 460px;
`;

export {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
  StyledHashtag,
  LeftContainer,
  LikeButton,
  RightContainer,
  PostManagementContainer,
  InfoLikes,
};
