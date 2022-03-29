import { Container, Form, Img } from "./style";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import api from "../../../services/api";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";

export default function PostLink({ loadPost, loadHashTag }) {
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("");
  const [postText, setPostText] = useState("");
  const { auth } = useAuth();
  const { user } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const posts = await api.sendPost({ link, postText }, auth);
      setIsLoading(false);
      setLink("");
      setPostText("");
      loadPost();
      loadHashTag();
    } catch {
      setIsLoading(false);
      Swal.fire({
        title: "Oops :(",
        text: "There was an error publishing your link",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
    }
  }

  return (
    <Container>
      <div>
        <Img src={user?.image} alt="user" />
      </div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <p>What are you going to share today?</p>
        <input
          className="link"
          type="text"
          placeholder="http://..."
          name="link"
          onChange={(e) => setLink(e.target.value)}
          value={link}
          required
          disabled={isLoading}
        />
        <input
          className="description"
          type="text"
          placeholder="Awesome article about #javascript"
          name="description"
          onChange={(e) => setPostText(e.target.value)}
          value={postText}
          disabled={isLoading}
        />
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </Form>
    </Container>
  );
}
