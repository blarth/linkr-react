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
  PostManagementContainer,
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
import EditPostButton from "./EditPost/button";
import  EditPostInput from "./EditPost/input";
import Swal from "sweetalert2";

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
  const [editMode, setEditMode] = useState({
    isEditing: false,
    inputValue: postText,
    inputDisabled: false,
  });

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

  function handleChange({ target }) {
    setEditMode({...editMode, inputValue: target.value});
  }
  async function handleKey(e){
    if(e.key === 'Escape' || e.key === 'Esc'){
      setEditMode({...editMode, isEditing: false, inputValue: postText});
    }
    if(e.key === 'Enter'){
      setEditMode({...editMode, inputDisabled: true});
      try{
        await api.editPost(auth, postId, {link: metadata.url, postText: editMode.inputValue});
        loadPost();
        setEditMode({...editMode, isEditing: false});
      }catch(error){
        setEditMode({...editMode, inputDisabled: false});
        Swal.fire({
          title: "Oops :(",
          text: "There was an error editing your post",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
      }
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
        <PostManagementContainer>
          {user.id === userId && <><EditPostButton editMode={editMode} setEditMode={setEditMode} postText={postText}/><DeletePost loadPost={loadPost} id = {id}/></>}
        </PostManagementContainer>
        <User onClick={redirectToUserPage}>{userName}</User>
        <ContainerPost>
          <Description>
            {editMode.isEditing ?
              <EditPostInput
                handleChange={handleChange}
                handleKey={handleKey}
                editMode={editMode}
              />
              :
              <ReactHashtag
                renderHashtag={(hashtagText) => (
                  <StyledHashtag to={`/hashtag/${hashtagText.slice(1)}`}>
                    {hashtagText}
                  </StyledHashtag>
                )}>
                {postText}
              </ReactHashtag>
            }
          </Description>
          <MetaDataPost {...metadata}></MetaDataPost>
        </ContainerPost>
      </RightContainer>
    </Container>
  );
}
