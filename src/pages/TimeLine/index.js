import PostLink from "./PostLink";
import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, ContainerInfo, MainContainer } from "./style";
import Header from "../../components/Header";
import Swal from "sweetalert2";
import Sidebar from "../../components/hashtagsSidebar";

export default function TimeLine() {
  const { auth } = useAuth();
  const [data, setData] = useState(null);

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
  useEffect(loadPost, []);

  return (
    <MainContainer>
      <Container>
        <Header></Header>
        <ContainerInfo>
          <h4>timeline</h4>
        </ContainerInfo>
        <PostLink loadPost={loadPost}></PostLink>
        {data === null ? (
          <h3>Loading..</h3>
        ) : data?.length === 0 ? (
          <h3>There are no posts yet</h3>
        ) : (
          data?.map((post) => <Post key={post.id} {...post} loadPost={loadPost} />)
        )}
      </Container>
      <Sidebar />
    </MainContainer>
  );
}
