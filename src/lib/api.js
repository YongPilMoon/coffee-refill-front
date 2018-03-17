import axios from 'axios';

const API_SERVER = 'localhost:';
const API_SERVER_PORT = '4000';

export const writePost = ({title, body, tags}) => axios.post(`${API_SERVER}:${API_SERVER_PORT}/write`, { title, body, tags });
export const getPost = (id) => axios.get(`/api/posts/${id}`);