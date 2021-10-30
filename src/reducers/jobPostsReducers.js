import {
  FETCH_ALL_JOB_POST,
  CREATE_JOB_POST,
  DELETE_JOB_POST,
  UPDATE_JOB_POST,
} from "../constants/jobPostsActionTypes";

export default (jobPosts = [], action) => {
  switch (action.type) {
    case FETCH_ALL_JOB_POST:
      return action.payload;

    default:
      return jobPosts;
  }
};
