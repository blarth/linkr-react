import React from "react";
import {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
  LeftContainer,
  LikeButton,
} from "./style";
import MetaDataPost from "./MetaData";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import RedHeart from "../../assets/redheart.svg";
import WhiteHeart from "../../assets/whiteheart.svg";

export default function Post() {
  const { auth } = useAuth();
  const [data, setData] = useState("");
  function loadPost() {
    const promise = api.getPost(auth);
    promise.then((response) => {
      setData(response.data);
      console.log(response.data[0]);
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }

  function likePost() {}

  useEffect(loadPost, []);

  return (
    <Container>
      {data && (
        <>
          <LeftContainer>
            <Avatar
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.minitokyo.net%2Fdownloads%2F34%2F08%2F477934.jpg&f=1&nofb=1"
              alt="avatar img"
            ></Avatar>
            <LikeButton
              src={data.liked ? RedHeart : WhiteHeart}
              alt="heart"
              onClick={() => {
                likePost();
              }}
            />
          </LeftContainer>
          <ContainerPost>
            <User>Ichigo</User>
            <Description>{data.postText}</Description>

            <MetaDataPost metadataInfo={data.metadata}></MetaDataPost>
          </ContainerPost>
        </>
      )}
    </Container>
  );
}
