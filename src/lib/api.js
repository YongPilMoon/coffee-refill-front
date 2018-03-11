import axios from 'axios';

const API_SERVER = '127.0.0.1';
const API_SERVER_PORT = '7070';

export const writePost = ({title, body, tags}) => axios.post(`${API_SERVER}:${API_SERVER_PORT}/write`, { title, body, tags });
export const getPost = (id) => axios.get(`/api/posts/${id}`);