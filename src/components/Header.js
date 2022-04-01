import styled from "styled-components";
import React, { useEffect, useState } from "react";
import UpArrow from "../assets/up-arrow.png";
import DownArrow from "../assets/down-arrow.png";
import useAuth from "../hooks/useAuth";
import api from "../services/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import SearchBar from "./SearchBar";

export default function Header() {
  const [logout, setLogout] = useState();
  const { auth } = useAuth();
  const navigate = useNavigate();
  let { user, setUser } = useUser();
  useEffect(() => {
    getUser();
    setUser(JSON.parse(localStorage.getItem("user")));
    //eslint-disable-next-line
  }, []);

  function getUser() {
    if (!auth) {
      navigate("/");
      return;
    }
  }

  async function signoutUser() {
    try {
      await api.signout(auth);
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      window.location.reload();
    } catch (error) {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      window.location.reload();
      console.log(error);
    }
  }

  return (
    <>
      <Top>
        <h1 onClick={() => navigate("/timeline")}>linkr</h1>
        <div onClick={() => (logout ? setLogout(false) : setLogout(true))}>
          <img
            src={logout ? UpArrow : DownArrow}
            alt={logout ? "Up Arrow" : "Down Arrow"}
            className="arrow"
          />
          {user && (
            <img
              src={`${user.image}`}
              className="profile-image"
              alt="User profile "
            />
          )}
        </div>
      </Top>
      {logout && (
        <>
          <Logout
            onClick={() => {
              signoutUser();
            }}
          >
            {" "}
            Logout{" "}
          </Logout>
          <UserPage onClick={() => navigate(`/user/${user.id}`)}>
            {" "}
            My Profile
          </UserPage>
        </>
      )}
      <SearchBar />
    </>
  );
}

const Top = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;

  background-color: #151515;

  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    align-items: center;

    cursor: pointer;
  }
  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 49px;
    color: white;

    padding: 9px;

    cursor: pointer;
  }
  .profile-image {
    width: 53px;
    height: 53px;

    border-radius: 50%;

    margin: 12px;

    object-fit: cover;
  }
  .arrow {
    width: 30px;
    height: 30px;
  }
`;
const Logout = styled.div`
  position: fixed;
  width: 150px;
  height: 47px;
  right: 0;
  top: 119px;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #171717;

  border-radius: 0px 0px 20px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.05em;

  cursor: pointer;
`;
const UserPage = styled.div`
  position: fixed;
  width: 150px;
  height: 44px;
  right: 0;
  top: 75px;

  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #171717;

  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.05em;

  cursor: pointer;
`;
