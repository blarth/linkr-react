import styled from "styled-components";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import { DebounceInput } from "react-debounce-input";
import Search from "./Search";
import useAuth from "../hooks/useAuth";
import vector from "../assets/Vector2.svg";
import { Img } from "../pages/TimeLine/PostLink/style";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(null);
  const { auth } = useAuth();

  async function getSearchBar() {
    try {
      const users = await api.getSearchBarResults(auth, searchText);
      if (!users) {
        return;
      }

      setData([...users.data]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(getSearchBar, [searchText]);

  return (
    <Container>
      <div className="input-search-bar">
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          placeholder="Search for people and friends"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img src={vector} alt="vector" />
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
  display: flex;
  width: 563px;
  height: 45px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    top: 85px;
    width: 100%;
    position: absolute;
  }
  position: relative;
  .input-search-bar {
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      right: 10px;
      @media (max-width: 600px) {
        right: 30px;
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
  border-radius: 8px;
  display: none;
  border-radius: 80px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;
