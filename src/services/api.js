import axios from "axios";

const BASE_URL = "http://localhost:4000";

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

async function sendPost(body, token) {
  const config = createConfig(token);
  await axios.post(`${BASE_URL}/timeline`, body, config)
}
const api = {
  createUser,
  signin,
  sendPost
};
export default api;
