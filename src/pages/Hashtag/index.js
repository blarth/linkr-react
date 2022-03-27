import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container, MainContainer, ContainerInfo } from "./style";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import Sidebar from "../../components/hashtagsSidebar";

export default function HashtagTimeLine() {
  const { auth } = useAuth();
  const [data, setData] = useState(null);

  const { name: hashtagText } = useParams();

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
  useEffect(loadPost, []);

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
          data?.map((post) => <Post key={post.id} {...post} />)
        )}
      </Container>
      <Sidebar />
    </MainContainer>
  );
}
