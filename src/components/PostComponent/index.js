import React from "react";
import {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
} from "./style";
import MetaDataPost from "./MetaData";
import { useNavigate } from "react-router-dom";


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
        <Description>{postText}</Description>
        <MetaDataPost {...metadata}></MetaDataPost>
      </ContainerPost>
    </Container>
  );
}
