import axios from "axios";
import { refreshTokenRequest } from "../apis/user.api";
import * as tokenServices from "./token";

const service = axios.create({
  baseURL: process.env.REACT_APP_LOGIN_URL,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});

service.interceptors.request.use(
  async (config) => {
    const accessToken = tokenServices.getLocalAccessToken();
    if (accessToken) {
      config.headers.authorization = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const baseURL = process.env.REACT_APP_LOGIN_URL;
    if (
      error.response.status === 401 &&
      error.response.config.baseURL === baseURL
    ) {
      return Promise.reject(new Error(error.response.data.error_description));
    } else if (
      error.response.status === 401 &&
      error.response.config.baseURL !== baseURL
    ) {
      return refreshTokenRequest(tokenServices.getLocalRefreshToken())
        .then((res) => {
          tokenServices.updateLocalAccessToken(res.data.accessToken);
          tokenServices.updateLocalRefreshToken(res.data.refreshToken);
          error.response.config.headers.authorization = res.data.accessToken;
          return axios(error.response.config);
        })
        .catch((error) => {
          tokenServices.removeAccessToken();
          window.location.href = "/login";
          return Promise.reject(error);
        });
    }
    return Promise.reject(
      new Error("Phiên đăng nhập hết hạn, vui lòng thoát và đăng nhập lại")
    );
  }
);
export default service;
