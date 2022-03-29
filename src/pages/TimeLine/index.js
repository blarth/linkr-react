import PostLink from "./PostLink";
import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, ContainerInfo, MainContainer } from "./style";
import Header from "../../components/Header";
import Swal from "sweetalert2";
import Sidebar from "../../components/hashtagsSidebar";
import { ThreeDots } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroller";

export default function TimeLine() {
  const { auth } = useAuth();
  const [data, setData] = useState(null);
  const [hashtags, setHashtags] = useState("");
  const [page, setPage] = useState(1);

  function loadPost() {
    const promise = auth && api.getPost(auth);
    if (!promise) {
      return;
    }
    promise.then((response) => {
      setData([...response.data]);
      
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
  function loadMorePosts(){
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
  function loadHashTag() {
    const promise = api.getHashtags();
    promise
      .then((res) => setHashtags(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadPost();
    loadHashTag();
  }, []);
  console.log(data)
  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <ContainerInfo>
          <h4>timeline</h4>
        </ContainerInfo>
        <PostLink loadPost={loadPost} loadHashTag={loadHashTag}></PostLink>
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
            hasMore={data?.length < page*10 ? false : true}
            
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
      <Sidebar loadHashTag={loadHashTag} hashtags={hashtags} />
    </MainContainer>
  );
}
