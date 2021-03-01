import axios from "axios";

const url = "https://memories-curd-mern-project.herokuapp.com/posts";

export const fetchData = () => axios.get(url);

export const createData = (data) => axios.post(url, data);

export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likeCount = (id) => axios.patch(`${url}/${id}/likePost`);
