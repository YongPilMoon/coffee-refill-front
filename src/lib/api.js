import axios from 'axios';
export const apiUri = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http//52.78.38.76:4000';

export const writePost = ({title, body, tags}) => axios.post(`${apiUri}/api/posts`, { title, body, tags });
export const getPost = (id) => axios.get(`${apiUri}/api/posts/${id}`);
export const getPostList = ({ tag, page }) => {
  const validatedTag = (!tag) ? '' : tag;
  return axios.get(`${apiUri}/api/posts/?page=${page}&tag=${validatedTag}`);
};
