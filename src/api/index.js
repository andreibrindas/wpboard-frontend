import axios from "axios";

const url = "http://wpboard.local/wp-json/wp/v2";

export const fetchPosts = () => axios.get("/job-post");
