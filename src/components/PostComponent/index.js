import React from "react";
import {
  Container,
  Avatar,
  ContainerPost,
  User,
  Description,
  StyledHashtag,
  LeftContainer,
  RightContainer,
  LikeButton,
} from "./style";
import MetaDataPost from "./MetaData";
import api from "../../services/api";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import RedHeart from "../../assets/redheart.svg";
import WhiteHeart from "../../assets/whiteheart.svg";
import { useNavigate } from "react-router-dom";
import DeletePost from "./DeletePost";
import useUser from "../../hooks/useUser";
import ReactHashtag from "@mdnm/react-hashtag";

export default function Post({
  id,
  postText,
  metadata,
  userName,
  userImage,
  userId,
  isLike,
  postId,
  loadPost,
}) {
  const navigate = useNavigate();
  const [like, setLike] = useState(isLike);
  const {user} = useUser();
  const { auth } = useAuth();
  function redirectToUserPage() {
    navigate(`/user/${userId}`);
  }
  async function handleLikes() {
    like ? setLike(false) : setLike(true);
    try {
      await api.likePost(auth, postId, !like);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <Container>
      <LeftContainer>
        <Avatar src={userImage} alt="avatar img"></Avatar>
        <LikeButton
          src={like ? RedHeart : WhiteHeart}
          alt="heart"
          onClick={() => {
            handleLikes();
          }}
        />
      </LeftContainer>
      <RightContainer>
        {user.id === userId && <DeletePost loadPost={loadPost} id = {id}/>}
        <User onClick={redirectToUserPage}>{userName}</User>
        <ContainerPost>
          <Description>
            <ReactHashtag
              renderHashtag={(hashtagText) => (
                <StyledHashtag to={`/hashtag/${hashtagText.slice(1)}`}>
                  {hashtagText}
                </StyledHashtag>
              )}
            >
              {postText}
            </ReactHashtag>
          </Description>
          <MetaDataPost {...metadata}></MetaDataPost>
        </ContainerPost>
      </RightContainer>
    </Container>
  );
}
