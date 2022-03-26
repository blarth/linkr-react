import Post from "../../components/PostComponent";
import api from "../../services/api";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Container } from "./style";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

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
    <Container>
      <Header></Header>
      <h4>#{hashtagText}</h4>
      {data === null ? (
        <h3>Loading..</h3>
      ) : data?.length === 0 ? (
        <h3>There are no posts yet</h3>
      ) : (
        data?.map((post) => <Post key={post.id} {...post} />)
      )}
    </Container>
  );
}
