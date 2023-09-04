import { axiosInstance as axios } from "./axios";
//import { BASE_URL } from "../constants";

export const callCommentsApi = async (postId) => {
  try {
    const response = await axios.get(`/posts/${postId}/comments`);

    if (response.status !== 200) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callAddCommentsApi = async (payload) => {
  try {
    const response = await axios.post(`/comments/add`, payload);

    if (response.status !== 201) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callAddReplyCommentsApi = async (payload) => {
  try {
    const response = await axios.post(`/comments/reply`, payload);

    if (response.status !== 201) throw new Error("Request faild");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
