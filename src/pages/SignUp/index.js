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

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    picture: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = { ...formData };

    try {
      api.createUser(user);
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, Try again!",
      });
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
          name="picture"
          value={formData.picture}
          required
        />
        <Button type="submit"> Sign Up </Button>
        <StyledLink to="/signup">First time? Create an account!</StyledLink>
      </Form>
    </Container>
  );
}
