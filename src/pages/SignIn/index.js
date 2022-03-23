import React, { useEffect, useState } from "react";
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
import useAuth from "../../hooks/useAuth";
import { ThreeDots } from "react-loader-spinner";

export default function SignIn() {
  const navigate = useNavigate();
  const { auth, signin } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  }, [auth]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const user = { ...formData };

    try {
      const { data } = await api.signin(user);
      signin(data);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        title: "Oops :(",
        text: "Something went wrong, Try again!",
        background: "#c9002c",
        confirmButtonColor: "#9f9adb",
        color: "#fff",
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

        <Button type="submit" disabled={loading}>
          {loading ? (
            <ThreeDots color="#FFFFFF" height={13} width={100} />
          ) : (
            "Sign Up"
          )}
        </Button>
        <StyledLink to="/signup">First time? Create an account!</StyledLink>
      </Form>
    </Container>
  );
}
