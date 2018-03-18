import axios from 'axios';
import queryString from 'query-string';
export const apiUri = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

export const writePost = ({title, body, tags}) => axios.post(`${apiUri}/api/posts`, { title, body, tags });
export const getPost = (id) => axios.get(`/api/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`${apiUri}/api/posts/?${queryString.stringify({ tag, page})}`);
