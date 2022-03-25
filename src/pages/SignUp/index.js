import React, { useState } from "react";
import {
  LeftContainer,
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/Form";
import api from "../../services/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    image: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const user = { ...formData };

    if (
      user.email === "" ||
      user.password === "" ||
      user.username === "" ||
      user.image === ""
    ) {
      Swal.fire({
        title: "Oops :(",
        text: "All fields must be filled in",
        background: "#d66767",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
      });
      return;
    }

    try {
      await api.createUser(user);

      navigate("/");
    } catch (error) {
      setLoading(false);

      if (error.response.status === 409) {
        Swal.fire({
          title: "Oops :(",
          text: "Email is already in use",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
      } else {
        Swal.fire({
          title: "Oops :(",
          text: "Something went wrong, Try again!",
          background: "#d66767",
          confirmButtonColor: "#9f9adb",
          color: "#fff",
        });
      }
    }
  }
  return (
    <Container>
      <LeftContainer>
        <div>
          <h1>linkr</h1>
          <p>save, share and discover the best links on the web</p>
        </div>
      </LeftContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="email"
          placeholder="e-mail"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => handleChange(e)}
          name="username"
          value={formData.username}
          required
        />
        <Input
          type="text"
          placeholder="picture url"
          onChange={(e) => handleChange(e)}
          name="image"
          value={formData.image}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} width={100} />
          ) : (
            "Sign Up"
          )}
        </Button>
        <StyledLink to="/">Switch back to log in</StyledLink>
      </Form>
    </Container>
  );
}
