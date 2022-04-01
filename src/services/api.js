import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function createUser(user) {
  await axios.post(`${REACT_APP_BASE_URL}/signup`, user);
}

async function signin(data) {
  const token = await axios.post(`${REACT_APP_BASE_URL}/signin`, data);
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
  const promisse = await axios.delete(
    `${REACT_APP_BASE_URL}/deletepost/${id}`,
    config
  );
  return promisse;
}

async function getPost(token, page) {
  const config = createConfig(token);
  const promisse = await axios.get(
    `${REACT_APP_BASE_URL}/timeline/${page ? page * 10 : 0}`,
    config
  );

  return promisse;
}

async function getPostbyUserId(token, id) {
  const config = createConfig(token);

  const promisse = await axios.get(`${REACT_APP_BASE_URL}/user/${id}`, config);

  return promisse;
}

async function signout(token) {
  const config = createConfig(token);
  await axios.delete(`${REACT_APP_BASE_URL}/signout`, config);
}

async function getSearchBar(token, searchText){
  const config = createConfig(token);
  const users = await axios.get(`${process.env.REACT_APP_BASE_URL}/searchbar/${searchText}`, config)
  return users;
}

async function getUser(token) {
  const config = createConfig(token);
  const user = await axios.get(`${REACT_APP_BASE_URL}/users`, config);
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

async function getLikes(id) {
  const promise = await axios.get(`${REACT_APP_BASE_URL}/likes/${id}`);
  return promise;
}

async function getComments(token, id){
  const config = createConfig(token);
  const promise = await axios.get(
    `${REACT_APP_BASE_URL}/comments/${id}`,
    config);
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

async function editPost(token, postId, post) {
  const config = createConfig(token);
  const promise = await axios.patch(
    `${process.env.REACT_APP_BASE_URL}/posts/edit/${postId}`,
    post,
    config
  );
  return promise;
}

async function followUser(token, followedUserId) {
  const config = createConfig(token);
  await axios.post(
    `${process.env.REACT_APP_BASE_URL}/users/follow`,
    followedUserId,
    config
  );
}
async function getFollowers(token, followedUserId) {
  const config = createConfig(token);
  const promise = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/users/follow/${followedUserId}`,
    config
  );
  return promise;
}

async function checkFollowings(token) {
  const config = createConfig(token);
  const promise = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/users/following`,
    config
  );
  return promise;
}

async function createRepost(id, token) {
  const config = createConfig(token);
  const promisse = await axios.post(
    `${REACT_APP_BASE_URL}/repost/${id}`, null,
    config
  );
  return promisse;
}

async function verifyRepost(id, token) {
  const config = createConfig(token);
  const promisse = await axios.get(
    `${REACT_APP_BASE_URL}/repost/${id}`, 
    config
  );
  return promisse;
}

async function sendComment(body, postId, token) {
  const config = createConfig(token);
  await axios.post(
    `${REACT_APP_BASE_URL}/comments/${postId}`,
    body,
    config
  );
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
  getLikes,
  getComments,
  followUser,
  getFollowers,
  getSearchBar,
  checkFollowings,
  createRepost,
  verifyRepost,
  sendComment,
};

export default api;
