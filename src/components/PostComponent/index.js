import React from "react";
import urlMetadata from "url-metadata";
import {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
  LinkPost,
} from "./style";

export default function Post({ image, name, description, link }) {

   urlMetadata('https://www.youtube.com/watch?v=zu5Td8bq5ZQ').then(
    function (metadata) { 
    console.log(metadata)
  },
  function (error) { 
    console.log(error)
  })
    
  return (
    <Container>
      <Avatar></Avatar>
      <ContainerPost>
        <User></User>
        <Description>Hellos</Description>
        <LinkPost></LinkPost>
      </ContainerPost>
    </Container>
  );
}
