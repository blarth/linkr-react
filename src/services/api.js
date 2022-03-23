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

async function getPost(token){
  const config = createConfig(token);
  await axios.post(`${BASE_URL}/timeline`, config);
}
const api = {
  createUser,
  signin,
  getPost
};
export default api;
