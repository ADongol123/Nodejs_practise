import axios from "axios";
import { get } from "lodash";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getApi = async (url: string, config?: any) => {
  let controller: any;

  if (controller) controller.abort();
  controller = new AbortController();

  const signal = controller.signal;
  try {
    const response = await axios.get(`http://localhost:5000/api/${url}`, {
      signal,
      headers: {
        "Content-type": "application/json",
      },
      ...config,
    });
    const data = get(response, "data");
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.code === "ERR_BAD_REQUEST") throw error.response?.data.message;
      throw error.message;
    }
    throw error;
  }
};

export const postApi = async (url: string, payload?: any, config?: any) => {
  let formData;

  formData = payload;

  let headers = { "Content-Type": "application/json" };

  try {
    const response = await axios.post(
      `http://localhost:5000/api/${url}`,
      formData,
      {
        headers,
        ...config,
      }
    );
    const data = get(response, "data");

    return data;
  } catch (error) {
    // abort();
    throw error;
  }
};
