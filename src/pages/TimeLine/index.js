import PostLink from "./PostLink";
import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, ContainerInfo, ContainerNewPosts, MainContainer } from "./style";
import Header from "../../components/Header";
import Swal from "sweetalert2";
import Sidebar from "../../components/hashtagsSidebar";
import { ThreeDots } from "react-loader-spinner";
import useInterval from "react-useinterval"
import spinningwheel from "../../assets/VectorspinningWheel.svg"
import InfiniteScroll from "react-infinite-scroller"

export default function TimeLine() {
  const { auth } = useAuth();
  const [data, setData] = useState(null);
  const [hashtags, setHashtags] = useState("");
  const [dataComparision, setDataComparision] = useState("")
  const [hasNewPosts, setHasNewPosts] = useState(false)
  const [page, setPage] = useState(1);


  useInterval(verifyNewPosts, 15000);


  function verifyNewPosts(){
    loadNewPost()
    if(dataComparision.length === 0) return
    if(dataComparision[0]?.id === data[0]?.id) return
    console.log(dataComparision[0].id)
    console.log(data[0].id)
    dataComparision[0]?.id !== data[0]?.id && setHasNewPosts(true) 
  }
  function loadNewPost(){
  const promise = auth && api.getPost(auth);
  if (!promise) {
    return;
  }
  promise.then((response) => {
    setDataComparision([...response.data]);
  })
  
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
};
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

  function loadHashTag(){
    const promise = api.getHashtags();
    promise
      .then((res) => setHashtags(res.data))
      .catch((error) => console.log(error));
  } 
  function reloadPost(){
    loadPost()
    loadHashTag()
    setHasNewPosts(false)
  }
  
  useEffect(() => {
    loadPost()
    loadHashTag()
  }, []);

  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <ContainerInfo>
          <h4>timeline</h4>
        </ContainerInfo>
        <PostLink loadPost={loadPost} loadHashTag={loadHashTag}></PostLink>
        { hasNewPosts && <ContainerNewPosts onClick={reloadPost}><p>{((dataComparision[0]?.id)-data[0]?.id) === 0 ? setHasNewPosts(false) : ((dataComparision[0]?.id)-data[0]?.id) } new posts, load more!</p><img src={spinningwheel} alt="vector img"></img></ContainerNewPosts>}
        {data === null ? (
          <h3>
            {" "}
            <ThreeDots color="#FFFFFF" height={13} width={100} />
          </h3>
        ) : data?.length === 0 ? (
          <h3>There are no posts yet</h3>
        ) :<InfiniteScroll
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
      </InfiniteScroll>}
      </Container>
      <Sidebar loadHashTag={loadHashTag} hashtags={hashtags} />
    </MainContainer>
  );
}
