import { getCookie } from "../util";
import { axiosInstance as axios } from "./axios";

export const callRegisterPostApi = async (payload) => {
  try {
    const response = await axios.post(`/posts/write/`, payload, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken") || "",
      },
    });
    if (response.status !== 201) throw new Error("Request faild");
    return response;
  } catch (error) {
    return error.response;
  }
};
