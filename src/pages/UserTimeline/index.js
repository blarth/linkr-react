import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container } from "./style";
import Header from "../../components/Header";
import { useParams, useLocation } from "react-router-dom";
import { Avatar } from "../../components/PostComponent/style";
import { ContainerInfo, RightContainer, FollowButton } from "./style";
import Sidebar from "../../components/hashtagsSidebar";
import { MainContainer } from "../TimeLine/style";
import { ThreeDots } from "react-loader-spinner";
import useUser from "../../hooks/useUser";

export default function UserTimeLine() {
  const { auth } = useAuth();
  const { persistedUser: userData } = useUser();
  const [data, setData] = useState(null);
  const [hashtags, setHashtags] = useState("");
  const { id } = useParams();
  const [user, setUser] = useState({});
  const location = useLocation();
  const [isfollowing, setIsFollowing] = useState(false);
  const [allowFollow, setAllowFollow] = useState();
  const [followedUserId, setFollowedUserId] = useState({});

  function loadHashTag() {
    const promise = api.getHashtags();
    promise
      .then((res) => setHashtags(res.data))
      .catch((error) => console.log(error));
  }

  function loadPost() {
    const promise = api.getPostbyUserId(auth, id);

    promise.then(async (response) => {
      setData([...response.data]);
      setUser({
        userName: response.data[0].userName,
        userImage: response.data[0].userImage,
        userId: response.data[0].userId,
      });
      setFollowedUserId({ followedUserId: response.data[0].userId });
      setAllowFollow(userData.id !== response.data[0].userId);
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }

  useEffect(() => {
    loadPost();
    loadHashTag();
    getFollower();
    // eslint-disable-next-line
  }, [location.pathname]);

  async function handleFollow() {
    isfollowing ? setIsFollowing(false) : setIsFollowing(true);
    auth && followedUserId && (await api.followUser(auth, followedUserId));
  }
  async function getFollower() {
    const follower = auth && user && (await api.getFollowers(auth, id));
    !follower.data[0] ? setIsFollowing(false) : setIsFollowing(true);
  }

  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <ContainerInfo>
          <Avatar src={user?.userImage} alt="user Avatar"></Avatar>
          <h4>{`${user?.userName}'s posts`}</h4>
        </ContainerInfo>

        {data === null ? (
          <h3>
            <ThreeDots color="#FFFFFF" height={13} width={100} />
          </h3>
        ) : data?.length === 0 ? (
          <h3>There are no posts yet</h3>
        ) : (
          data?.map((post) => (
            <Post
              loadPost={loadPost}
              loadHashTag={loadHashTag}
              key={post.id}
              {...post}
            />
          ))
        )}
      </Container>
      <RightContainer allowFollow={allowFollow}>
        {allowFollow && (
          <div>
            {isfollowing ? (
              <FollowButton
                followType="unfollow"
                onClick={() => handleFollow()}
              >
                Unfollow
              </FollowButton>
            ) : (
              <FollowButton followType="follow" onClick={() => handleFollow()}>
                Follow
              </FollowButton>
            )}
          </div>
        )}
        <Sidebar loadHashTag={loadHashTag} hashtags={hashtags} />
      </RightContainer>
    </MainContainer>
  );
}
