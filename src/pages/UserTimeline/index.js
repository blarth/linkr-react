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
import Swal from "sweetalert2";
import InfiniteScroll from "react-infinite-scroller";
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
  const [page, setPage] = useState(1);
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

    promise.then((response) => {
      console.log(response.data.userData);

      setData([...response.data.answer]);
      setUser({
        userName: response.data.userData.userName,
        userImage: response.data.userData.userImage,
        userId: response.data.userData.id,
      });
      setFollowedUserId({ followedUserId: response.data.userData.id });
      setAllowFollow(userData.id !== response.data.userData.id);
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }
  function loadMorePosts() {
    const promise = auth && api.getPost(auth, page);
    if (!promise) {
      return;
    }
    promise.then((response) => {
      setData(data.concat([...response.data]));
      if (data === null) return;
      setPage(page + 1);
    });

    promise.catch((error) => {
      console.log(error.response);
      if (auth) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Please, reload the page!</a>',
        });
      }
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
          <InfiniteScroll
            pageStart={page}
            loadMore={loadMorePosts}
            hasMore={data?.length < page * 10 ? false : true}
            loader={
              <h3>
                {" "}
                <ThreeDots color="#FFFFFF" height={13} width={100} />
              </h3>
            }
          >
            {data?.map((post, i) => (
              <Post
                key={i}
                {...post}
                loadPost={loadPost}
                loadHashTag={loadHashTag}
              />
            ))}
          </InfiniteScroll>
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
