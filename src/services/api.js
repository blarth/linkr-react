import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const API_URL = 'https://linktr-api.herokuapp.com'

async function createUser(user) {
  await axios.post(`${API_URL}/signup`, user);
}

async function signin(data) {
  const token = await axios.post(
    `${API_URL}/signin`,
    data
  );
  return token;
}

async function sendPost(body, token) {
  const config = createConfig(token);
  const promisse = await axios.post(
    `${API_URL}/timeline`,
    body,
    config
  );
  return promisse;
}

async function deletePost(id, token) {
  const config = createConfig(token);
  const promisse = await axios.delete(`${API_URL}/deletepost/${id}`, config);
  return promisse;
}

async function getPost(token) {
  const config = createConfig(token);
  const promisse = await axios.get(
    `${API_URL}/timeline`,
    config
  );

  return promisse;
}

async function getPostbyUserId(token, id) {
  const config = createConfig(token);

  const promisse = await axios.get(
    `${API_URL}/user/${id}`,
    config
  );

  return promisse;
}

async function signout(token) {
  const config = createConfig(token);
  await axios.delete(`${API_URL}/signout`, config);
}

async function getSearchBarResults(token, searchText){
  const config = createConfig(token);
  const users = await axios.get(`${process.env.REACT_APP_BASE_URL}/searchbar/${searchText}`, config)
  return users;
}

async function getUser(token) {
  const config = createConfig(token);
  const user = await axios.get(
    `${API_URL}/users`,
    config
  );
  return user;
}

async function getHashtags() {
  const promise = await axios.get(`${API_URL}/hashtags`);
  return promise;
}

async function likePost(token, postId, status) {
  const config = createConfig(token);
  await axios.put(
    `${API_URL}/posts/${postId}/${status}`,
    null,
    config
  );
}

async function getLikes(id){
  const promise = await axios.get(`${API_URL}/likes/${id}`);
  return promise;
}

async function getPostByHashtag(token, name) {
  const config = createConfig(token);
  const posts = await axios.get(
    `${API_URL}/posts/hashtags/${name}`,
    config
  );
  return posts;
}

async function editPost(token, postId, post){
  const config = createConfig(token);
  const promise = await axios.patch(
    `${process.env.REACT_APP_BASE_URL}/posts/edit/${postId}`,
  post,
  config);
  return promise;
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
  getSearchBarResults,
  editPost,
  getLikes,
};

export default api;
