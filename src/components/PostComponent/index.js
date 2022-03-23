import React from "react";
import {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
} from "./style";
import MetaDataPost from "./MetaData";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


export default function Post() {
  const { auth } = useAuth();
  const [data, setData] = useState("")
  function loadPost() {
    
    const promise = api.getPost(auth);
    promise.then((response) => {
      setData(response.data);
      console.log(response)
      
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }

   useEffect(loadPost, [])
    
  return (
    <Container>
      <Avatar src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.minitokyo.net%2Fdownloads%2F34%2F08%2F477934.jpg&f=1&nofb=1" alt="avatar img"></Avatar>
      <ContainerPost>
        <User>Ichigo</User>
        <Description>{data.postText}</Description>
        <MetaDataPost metadataInfo={data.metadata}></MetaDataPost>
      </ContainerPost>
    </Container>
  );
}
