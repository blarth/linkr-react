import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

export default function Search({
    id,
    name,
    image,
    setSearchText,
    isFollower
  }) {
    const navigate = useNavigate()
    function redirectToUser() {
        navigate(`/user/${id}`);
        setSearchText("")
      }
    return(
        <Container onClick={redirectToUser}>
            <img src={image} alt="user" />
            <p>{name} {isFollower && <span>• following</span>}</p>
        </Container>
    );
}

const Container = styled.div`
  background-color: #e7e7e7;
  width: 100%;
  padding: 18px 18px 0 18px;
  :last-child {
    padding-bottom: 20px;
    border-end-end-radius: 8px;
    border-end-start-radius: 8px;
  }
  img {
    object-fit: cover;
    width: 39px;
    height: 39px;
    border-radius: 50%;
  }
  p {
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;

<<<<<<< HEAD
        color: #515151;
        margin-left: 12px;
    }
    span{
        list-style: circle;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;

        color: #C5C5C5;

    }
`;
=======
    color: #515151;
    margin-left: 12px;
  }
`;
>>>>>>> 3f1fbcc57c76caa0ecc337a574de0ba8b36d5b50
