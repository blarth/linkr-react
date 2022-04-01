import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, MainContainer, ContainerInfo } from "./style";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Sidebar from "../../components/hashtagsSidebar";
import InfiniteScroll from "react-infinite-scroller";

export default function HashtagTimeLine() {
  const { auth } = useAuth();
  const [data, setData] = useState(null);
  const [hashtags, setHashtags] = useState("");
  const [page, setPage] = useState(1);


  const { name: hashtagText } = useParams();

  function loadHashTag() {
    const promise = api.getHashtags();
    promise
      .then((res) => setHashtags(res.data))
      .catch((error) => console.log(error));
  }

  function loadPost() {
    const promise = auth && api.getPostByHashtag(auth, hashtagText);
    if (!promise) {
      return;
    }
    promise.then((response) => {
      setData([...response.data]);
    });
    promise.catch((error) => {
      console.log(error.response);
    });
  }
  useEffect(() => {
    loadPost();
    loadHashTag();
  }, [hashtagText]);

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
  }

  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <ContainerInfo>
          <h4>#{hashtagText}</h4>
        </ContainerInfo>
        {data === null ? (
          <h3>
            {" "}
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
            {data?.map((post) => (
              <Post
                key={post.id}
                {...post}
                loadPost={loadPost}
                loadHashTag={loadHashTag}
              />
            ))}
          </InfiniteScroll>
        )}
      </Container>
      <Sidebar loadHashTag={loadHashTag} hashtags={hashtags} />
    </MainContainer>
  );
}
