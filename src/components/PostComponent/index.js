import React from "react";
import {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
  StyledHashtag
} from "./style";
import MetaDataPost from "./MetaData";
import { useNavigate } from "react-router-dom";
import ReactHashtag from "@mdnm/react-hashtag";



export default function Post({ postText, metadata, userName, userImage, userId}) {
  const navigate = useNavigate();
  function redirectToUserPage(){
    navigate(`/user/${userId}`)
  }

  

  return (
    <Container>
      <Avatar src={userImage} alt="avatar img"></Avatar>
      <ContainerPost>
        <User onClick={redirectToUserPage}>{userName}</User>
        <Description>
          <ReactHashtag renderHashtag={(hashtagText) => (
          <StyledHashtag to={`/hashtag/${hashtagText.slice(1)}`}>{hashtagText}</StyledHashtag>
          )}>
          {postText}
        </ReactHashtag>
        </Description>
        <MetaDataPost {...metadata}></MetaDataPost>
      </ContainerPost>
    </Container>
  );
}

