import axios from "axios";
import { getLocalAccessToken } from "./token";
const service = axios.create({
  baseURL: process.env.REACT_APP_SERVICE_URL,
  headers: {
    "content-type": "application/json",
  },
});

service.interceptors.request.use(
  async (config) => {
    // Handle token here ...
    config.headers.Authorization = `Bearer ${getLocalAccessToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    console.log(response.data);
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default service;
