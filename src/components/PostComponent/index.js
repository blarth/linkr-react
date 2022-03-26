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
import DeletePost from "./DeletePost";
import useUser from "../../hooks/useUser";


export default function Post({ id,postText, metadata, userName, userImage, userId}) {
  const navigate = useNavigate();
  const {user} = useUser();
  function redirectToUserPage(){
    navigate(`/user/${userId}`)
  }

  return (
    <Container>
      <Avatar src={userImage} alt="avatar img"></Avatar>
      <ContainerPost>
        {user.id === userId && <DeletePost id = {id} metadata = {metadata}/>}
        <User onClick={redirectToUserPage}>{userName}</User>
        <Description>{postText}</Description>
        <MetaDataPost {...metadata}></MetaDataPost>
      </ContainerPost>
    </Container>
  );
}
