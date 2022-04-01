import Swal from "sweetalert2";
import api from "../../../services/api";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import styled from "styled-components";
import useUser from "../../../hooks/useUser";
import send from "../../../assets/send.svg";

export default function PostComment({ postId, setRenderComment }) {
  const [comment, setComment] = useState("");
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  async function handleSubmit(e) {
    e.preventDefault();
    setRenderComment(true);
    setIsLoading(true);
    try {
      const posts = await api.sendComment({ comment }, postId, auth);
      setIsLoading(false);
      setComment("");
    } catch {
      setIsLoading(false);
      Swal.fire({
        title: "Oops :(",
        text: "There was an error publishing your comment",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
    }
  }

  return (
    <Container>
      <User src={user?.image} alt="user" />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="write a comment..."
          name="comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          required
          disabled={isLoading}
        />
        <button type="submit">
          <img src={send} alt="send" />
        </button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 15px 10px 25px;
  display: flex;
  align-items: center;
  width: 100%;
  input {
    all: unset;
    background: #252525;
    border-radius: 8px;
    padding-left: 10px;
    width: 100%;
    height: 39px;
    color: #ffffff;
  }
`;

const User = styled.img`
  object-fit: cover;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  margin-right: 14px;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  position: relative;
  button {
    all: unset;
    cursor: pointer;
  }
  img {
    position: absolute;
    right: 14px;
    top: 14px;
  }
  
`;
