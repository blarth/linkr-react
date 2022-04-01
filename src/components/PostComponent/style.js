import styled from "styled-components";
import { Link } from "react-router-dom";

const GeneralContainer = styled.div`
  position: relative;
  :last-child {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Container = styled.div`
  height: 290px;
  width: 611px;

  border-radius: ${(props) => (props.reposterId ? " 0 0 16px 16px" : "16px")};

  background: #171717;

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;
  padding: 12px;
  @media (max-width: 600px) {
    width: 100%;
    height: 250px;
    padding: 0 12px 12px 12px;
  }
  @media (max-width: 480px) {
    border-radius: 0;
  }
`;

const CommentsContainer = styled.div`
  width: 611px;

  border-radius: 0 0 16px 16px;

  background: #1e1e1e;

  display: flex;
  flex-direction: column;

  padding: 0 12px 12px 12px;
  margin-top: -30px;
  margin-bottom: 44px;

  /*
  position: absolute;
  top: -200px;
  animation: slide 1s downwards;
  @keyframes CommentContainer{
    100% { top: 0px; }
  }
  */

  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    border-radius: 0 0 20px 20px;
  }
  @media (max-width: 410px) {
    padding-left: 30px;
    padding-right: 40px;
  }

  @media (max-width: 360px) {
    padding-left: 55px;
    padding-right: 65px;
  }
`;

const Avatar = styled.img`
  object-fit: cover;
  height: 50px;
  width: 50px;
  border-radius: 50%;

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
  margin: 0;
  img {
    object-fit: cover;
  }
  h2,
  p {
    padding-left: 10px;
  }
`;

const User = styled.div`
  height: 23px;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-size: 19px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;

  cursor: pointer;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 23px;
  @media (max-width: 600px) {
    padding-top: 12px;
    gap: 10px;
    margin-right: 6px;
  }
  @media (max-width: 420px) {
    margin-left: 35px;
  }
  @media (max-width: 350px) {
    margin-left: 55px;
  }
  @media (max-width: 326px) {
    margin-left: 65px;
  }
`;
const RightContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  width: 503px;

  @media (max-width: 600px) {
    width: 340px;
    padding-top: 7px;
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
const ContainerShare = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;

  height: 35px;

  font-size: 11px;

  border-radius: 12px 12px 0 0;

  background-color: #1e1e1e;

  color: white;

  font-family: "Lato";

  padding: 13px;
  strong {
    cursor: pointer;
  }
  @media (max-width: 475px) {
    padding-left: 13%;
  }
  @media (max-width: 350px) {
    padding-left: 80px;
  }
`;

export {
  GeneralContainer,
  Container,
  CommentsContainer,
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
  ContainerShare,
};
