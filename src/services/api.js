import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

async function createUser(user) {
  await axios.post(`${REACT_APP_BASE_URL}/signup`, user);
}

async function signin(data) {
  const token = await axios.post(
    `${REACT_APP_BASE_URL}/signin`,
    data
  );
  return token;
}

async function sendPost(body, token) {
  const config = createConfig(token);
  const promisse = await axios.post(
    `${REACT_APP_BASE_URL}/timeline`,
    body,
    config
  );
  return promisse;
}

async function deletePost(id, token) {
  const config = createConfig(token);
  const promisse = await axios.delete(`${REACT_APP_BASE_URL}/deletepost/${id}`, config);
  return promisse;
}

async function getPost(token) {
  const config = createConfig(token);
  const promisse = await axios.get(
    `${REACT_APP_BASE_URL}/timeline`,
    config
  );

  return promisse;
}

async function getPostbyUserId(token, id) {
  const config = createConfig(token);

  const promisse = await axios.get(
    `${REACT_APP_BASE_URL}/user/${id}`,
    config
  );

  return promisse;
}

async function signout(token) {
  const config = createConfig(token);
  await axios.delete(`${REACT_APP_BASE_URL}/signout`, config);
}

async function getUser(token) {
  const config = createConfig(token);
  const user = await axios.get(
    `${REACT_APP_BASE_URL}/users`,
    config
  );
  return user;
}

async function getHashtags() {
  const promise = await axios.get(`${REACT_APP_BASE_URL}/hashtags`);
  return promise;
}

async function likePost(token, postId, status) {
  const config = createConfig(token);
  await axios.put(
    `${REACT_APP_BASE_URL}/posts/${postId}/${status}`,
    null,
    config
  );
}

async function getLikes(id){
  const promise = await axios.get(`${REACT_APP_BASE_URL}/likes/${id}`);
  return promise;
}

async function getPostByHashtag(token, name) {
  const config = createConfig(token);
  const posts = await axios.get(
    `${REACT_APP_BASE_URL}/posts/hashtags/${name}`,
    config
  );
  return posts;
}
const api = {
  createUser,
  signin,
  sendPost,
  getPost,
  signout,
  getUser,
  getHashtags,
  getPostbyUserId,
  likePost,
  deletePost,
  getPostByHashtag,
  getLikes
};

export default api;
