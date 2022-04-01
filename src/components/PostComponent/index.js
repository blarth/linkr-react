import React from "react";
import {
  GeneralContainer,
  Container,
  CommentsContainer,
  Avatar,
  ContainerPost,
  User,
  Description,
  StyledHashtag,
  LeftContainer,
  RightContainer,
  LikeButton,
  PostManagementContainer,
  InfoLikes,
  ContainerRepost,
  ContainerShare,
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
import EditPostInput from "./EditPost/input";
import Swal from "sweetalert2";
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import CommentButton from "./Comments/button";
import SingleComment from "./Comments/commentData";
import PostComment from "./Comments/postComment";
import vectorRepost from "../../assets/VectorRepost.svg";
import Repost from "./Shares";

export default function Post({
  id,
  postText,
  metadata,
  userName,
  userImage,
  userId,
  isLike,
  numberReposts,
  loadPost,
  loadHashTag,
  reposterName,
  reposterId,
}) {
  const navigate = useNavigate();
  const [like, setLike] = useState(isLike);
  const [renderComment, setRenderComment] = useState(null);
  const [comments, setComments] = useState({
    commentsList: "",
    commentBoxOpen: false,
  });
  const [editMode, setEditMode] = useState({
    isEditing: false,
    inputValue: postText,
    inputDisabled: false,
  });

  const [infoLikes, setInfoLikes] = useState(null);
  const { auth } = useAuth();
  const { user } = useUser();

  function redirectToUserPage() {
    navigate(`/user/${userId}`);
  }
  async function handleLikes() {
    like ? setLike(false) : setLike(true);
    try {
      await api.likePost(auth, id, !like);
      getLike();
    } catch (error) {
      console.log(error.response);
    }
  }
  async function getLike() {
    try {
      if (id) {
        const promiseLikes = await api.getLikes(id);
        setInfoLikes(promiseLikes.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  function handleChange({ target }) {
    setEditMode({ ...editMode, inputValue: target.value });
  }

  async function handleKey(e) {
    if (e.key === "Escape" || e.key === "Esc") {
      setEditMode({ ...editMode, isEditing: false, inputValue: postText });
    }
    if (e.key === "Enter") {
      setEditMode({ ...editMode, inputDisabled: true });
      try {
        await api.editPost(auth, id, {
          link: metadata.url,
          postText: editMode.inputValue,
        });
        setEditMode({ ...editMode, isEditing: false });
      } catch (error) {
        setEditMode({ ...editMode, inputDisabled: false });
        Swal.fire({
          title: "Oops :(",
          text: "There was an error editing your post",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
      }
      renderAfterUpdate();
    }
  }

  function renderAfterUpdate() {
    loadPost();
    loadHashTag();
  }

  function returnTooltip(length) {
    switch (length) {
      case 1:
        return `${infoLikes[length - 1].name} liked this post`;
      case 2:
        return `${infoLikes[length - 1].name}, ${
          infoLikes[length - 2].name
        } liked this post`;
      default:
        return `${infoLikes[length - 1].name}, ${
          infoLikes[length - 2].name
        } and other ${length - 2} people`;
    }
  }

  function returnTooltipUser(length) {
    switch (length) {
      case 1:
        return `You liked this post`;
      case 2:
        return `You and other person liked this post`;
      default:
        return `You, ${
          infoLikes?.find((el) => el.name !== user?.name).name
        } and other ${length - 2} people`;
    }
  }

  useEffect(() => {
    getLike();
    setRenderComment(false);
    const incomingComments = api.getComments(auth, id);
    incomingComments
      .then((res) => {
        setComments({ ...comments, commentsList: res.data });
      })
      .catch((e) => {
        console.log(e);
        /*
        Swal.fire({
          title: "Oops :(",
          text: "There was an error loading the comments",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
        */
      });
  }, [renderComment]);
  console.log(reposterName);
  return (
    <GeneralContainer>
      {reposterName && (
        <ContainerShare>
          <img src={vectorRepost} alt="repost icon" />
          {reposterId === user.id ? (
            <p>
              Re-posted by{" "}
              <strong onClick={() => navigate(`/user/${reposterId}`)}>
                you
              </strong>
            </p>
          ) : (
            <p>
              Re-posted by{" "}
              <strong onClick={() => navigate(`/user/${reposterId}`)}>
                {reposterName}
              </strong>
            </p>
          )}
        </ContainerShare>
      )}
      <Container
        commentBoxOpen={comments.commentBoxOpen}
        reposterId={reposterId}
      >
        <LeftContainer>
          <Avatar src={userImage} alt="avatar img"></Avatar>
          <LikeButton
            src={like ? RedHeart : WhiteHeart}
            alt="heart"
            onClick={() => {
              handleLikes();
            }}
          />
          <InfoLikes
            data-tip={
              infoLikes === null ? (
                <h1>Loading likes</h1>
              ) : infoLikes?.length === 0 ? (
                "No one liked this post #sadboys"
              ) : infoLikes?.find((el) => el.name === user.name) ? (
                returnTooltipUser(infoLikes.length)
              ) : (
                returnTooltip(infoLikes?.length)
              )
            }
          >
            {infoLikes?.length} likes
          </InfoLikes>
          <ReactTooltip place="bottom" type="light" />
          <CommentButton comments={comments} setComments={setComments} />
          <Repost
            loadPost={loadPost}
            loadHashTag={loadHashTag}
            id={id}
            numberReposts={numberReposts}
            reposterId={reposterId}
          />
        </LeftContainer>
        <RightContainer>
          <PostManagementContainer>
            {user.id === userId && (
              <>
                <EditPostButton
                  editMode={editMode}
                  setEditMode={setEditMode}
                  postText={postText}
                />
                <DeletePost
                  loadPost={loadPost}
                  loadHashTag={loadHashTag}
                  id={id}
                />
              </>
            )}
          </PostManagementContainer>
          <User onClick={redirectToUserPage}>{userName}</User>
          <ContainerPost>
            <Description>
              {editMode.isEditing ? (
                <EditPostInput
                  handleChange={handleChange}
                  handleKey={handleKey}
                  editMode={editMode}
                />
              ) : (
                <ReactHashtag
                  renderHashtag={(hashtagText) => (
                    <StyledHashtag to={`/hashtag/${hashtagText.slice(1)}`}>
                      {hashtagText}
                    </StyledHashtag>
                  )}
                >
                  {postText}
                </ReactHashtag>
              )}
            </Description>
            <MetaDataPost {...metadata}></MetaDataPost>
          </ContainerPost>
        </RightContainer>
      </Container>
      {comments.commentBoxOpen && (
        <CommentsContainer>
          {comments.commentsList.map((each) => (
            <SingleComment
              authorId={userId}
              commenterId={each.userId}
              doIfollow={each.following}
              image={each.image}
              name={each.name}
              text={each.comment}
            />
          ))}
          <PostComment
            setRenderComment={setRenderComment}
            postId={id}
          ></PostComment>
        </CommentsContainer>
      )}
    </GeneralContainer>
  );
}
