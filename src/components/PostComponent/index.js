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
  InfoLikes,
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
import { useEffect } from "react";
import ReactTooltip from 'react-tooltip';


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
  const [infoLikes, setInfoLikes] = useState(null)
  const { auth } = useAuth();
  const {user} = useUser()
  
  
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
  async function getLike(){
    try {
      if(postId){
        const promiseLikes = await api.getLikes(postId)
        setInfoLikes(promiseLikes.data)
      
      }
      
    } catch (error) {
      console.log(error.response);
    }
  }

  function returnTooltip(length){
    switch(length){
      case 1:
        return `${infoLikes[length-1].name} liked this post`
      case 2:
        return `${infoLikes[length-1].name}, ${infoLikes[length-2].name} liked this post`
      default:
        return `${infoLikes[length-1].name}, ${infoLikes[length-2].name} and other ${length -2} people`
    }
  }
  function returnTooltipUser(length){
    switch(length){
      
      case 1:
        return `You liked this post`
      case 2:
        return `You and other person liked this post`
      default:
        return `You, ${infoLikes?.find(el => el.name !== user?.name).name} and other ${length -2} people`
    }
  }

  useEffect(getLike,[])
  console.log(infoLikes)
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
        <InfoLikes data-tip={infoLikes === null ? <h1>Loading likes</h1> : 
            infoLikes?.length === 0 ? "No one liked this post #sadboys": 
            infoLikes?.find(el => el.name === user.name) ? returnTooltipUser(infoLikes.length)
            : returnTooltip(infoLikes?.length)}>{infoLikes?.length} likes</InfoLikes>
        <ReactTooltip
        place="bottom"
        type="light"
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



