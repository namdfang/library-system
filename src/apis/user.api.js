import request from "../utilities/request";
import qs from "qs";

export function postLogin({ username, password }) {
  const data = {
    username,
    password,
    client_id: "library",
    grant_type: "password",
  };
  return request({
    method: "post",
    data: qs.stringify(data),
  });
}

export function refreshTokenRequest(refreshToken) {
  const data = {
    client_id: "library",
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  };
  return request({
    method: "post",
    data: qs.stringify(data),
  });
}
export function postRegister({ name, email, phone, account }) {
  return request({
    url: "/register",
    method: "post",
    data: {
      name,
      email,
      phone,
      account: { username: account.username, password: account.password },
    },
  });
}
