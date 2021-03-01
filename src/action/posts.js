import {
  CREATE,
  UPDATE,
  DELETE,
  FETCH_ALL,
  LIKE,
} from "../constants/acyionTypes";

import {
  fetchData,
  createData,
  updatePost,
  deletePost,
  likeCount,
} from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchData();
    console.log("data:", data);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await createData(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const DeletePost = (id) => async (dispatch) => {
  try {
    await deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await likeCount(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
