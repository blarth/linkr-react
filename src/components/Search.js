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
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 100%;
  padding: 18px 18px 0 18px;
  :last-child {
    padding-bottom: 20px;
  }
  img {
    object-fit: cover;
    color: #C6C6C6;
    width: 39px;
    height: 39px;
    border-radius: 50%;
  }
  p {
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;

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
