import axios from "axios";

const BASE_URL = "https://linktr-api.herokuapp.com/";

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
const api = {
  createUser,
  signin,
};
export default api;
