import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function createUser(user) {
  await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, user);
}

async function signin(data) {
  const token = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/signin`,
    data
  );
  return token;
}

async function sendPost(body, token) {
  const config = createConfig(token);
  const promisse = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/timeline`,
    body,
    config
  );
  return promisse;
}

async function deletePost(id, token) {
  const config = createConfig(token);
  const promisse = await axios.delete(`${process.env.REACT_APP_BASE_URL}/deletepost/${id}`, config);
  return promisse;
}

async function getPost(token) {
  const config = createConfig(token);
  const promisse = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/timeline`,
    config
  );

  return promisse;
}

async function getPostbyUserId(token, id) {
  const config = createConfig(token);

  const promisse = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/user/${id}`,
    config
  );

  return promisse;
}

async function signout(token) {
  const config = createConfig(token);
  await axios.delete(`${process.env.REACT_APP_BASE_URL}/signout`, config);
}

async function getUser(token) {
  const config = createConfig(token);
  const user = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/users`,
    config
  );
  return user;
}

async function getHashtags() {
  const promise = await axios.get(`${process.env.REACT_APP_BASE_URL}/hashtags`);
  return promise;
}

async function likePost(token, postId, status) {
  const config = createConfig(token);
  await axios.put(
    `${process.env.REACT_APP_BASE_URL}/posts/${postId}/${status}`,
    null,
    config
  );
}

async function getPostByHashtag(token, name) {
  const config = createConfig(token);
  const posts = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/posts/hashtags/${name}`,
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
  editPost,
};

export default api;
