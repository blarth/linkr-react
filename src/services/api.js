import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function createUser(user) {
  await axios.post(`${BASE_URL}/signup`, user);
}

async function signin(data) {
  const token = await axios.post(`${BASE_URL}/signin`, data);
  return token;
}

async function signout(token) {
  const config = createConfig(token);
  await axios.delete(`${BASE_URL}/signout`, config);
}

async function getUser(token) {
  const config = createConfig(token);
  const user = await axios.get(`${BASE_URL}/users`, config);
  return user;
}
const api = {
  createUser,
  signin,
  signout,
  getUser,
};
export default api;
