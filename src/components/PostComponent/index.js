import React from "react";
import {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
} from "./style";
import MetaDataPost from "./MetaData";

export default function Post({ image, name, description, metadataLink }) {

   
    
  return (
    <Container>
      <Avatar src={image} alt="avatar img"></Avatar>
      <ContainerPost>
        <User>{name}</User>
        <Description>{description}</Description>
        <MetaDataPost metadataLink={metadataLink}></MetaDataPost>
      </ContainerPost>
    </Container>
  );
}
