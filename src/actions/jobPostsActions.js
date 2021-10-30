import {
  FETCH_ALL_JOB_POST,
  CREATE_JOB_POST,
  DELETE_JOB_POST,
  UPDATE_JOB_POST,
} from "../constants/jobPostsActionTypes";

import * as api from "../api";

// Actions creators

export const getJobPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: FETCH_ALL_JOB_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
