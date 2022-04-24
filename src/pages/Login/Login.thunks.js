import { postLogin } from "../../apis/user.api";
import * as actions from "./Login.actions";

export const login = (payload) => (dispatch) => {
  dispatch(actions.loginRequested());
  return postLogin(payload)
    .then((res) => {
      return dispatch(actions.loginSuccess(res.data));
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.loginFailed(err.response.data)));
    });
};
