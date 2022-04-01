import styled from "styled-components";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { DebounceInput } from "react-debounce-input";
import Search from "./Search";
import useAuth from "../hooks/useAuth";
import vector from "../assets/Vector2.png";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  const { auth } = useAuth();

  async function getNotFollowers() {
    try {
      const users = await api.getSearchBar(auth, searchText);
      if (!users) {
        return;
      }
      setData(
        users.data.map((follower) => ({
          ...follower,
          isFollower: follower.followed ? true : false,
        }))
      );
      if (data === null) {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(getNotFollowers, [searchText]);

  return (
    <Container>
      <div className="input-search-bar">
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          placeholder="Search for people and friends"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img className="color" src={vector} alt="vector" />
      </div>
      <SearchBarResults
        className={searchText.length >= 3 ? "show-result" : "hide-result"}
      >
        {data?.map((search) => (
          <Search setSearchText={setSearchText} key={search.id} {...search} />
        ))}
      </SearchBarResults>
    </Container>
  );
}

const Container = styled.div`
  width: 563px;
  height: 45px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index:3;

  top: 37px;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 800px) {
    width: 360px;

  }
  @media (max-width: 600px) {
    top: 110px;
    width: 100%;
    position: absolute;
    z-index:1;
  }
  .input-search-bar {
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 12px;
      right: 10px;
      @media (max-width: 600px) {
        right: 22px;
      }
    }
    @media (max-width: 600px) {
      display: flex;
      align-content: center;
      justify-content: center;
      
    }
  }
  input {
    all: unset;
    box-sizing: border-box;
    padding-left: 15px;
    background: #ffffff;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    @media (max-width: 600px) {
      width: 95%;
    }
  }
  input::placeholder {
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;

    color: #c6c6c6;
  }
  .show-result {
    display: flex;
  }
  .hide-result {
    display: none;
  }
`;

const SearchBarResults = styled.div`
  position: absolute;
  top: 38px;
  flex-direction: column;
  width: 100%;
  border-end-end-radius: 8px;
  border-end-start-radius: 8px;
  display: none;
  background-color: #e7e7e7;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 95%;
  }
`;
