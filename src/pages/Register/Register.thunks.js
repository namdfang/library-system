import * as actions from "./Register.actions";
import { postRegister } from "../../apis/user.api";

export const register = (user) => (dispatch) => {
  dispatch(actions.registerRequested());
  return postRegister(user)
    .then((res) => {
      dispatch(actions.registerSuccess(res));
    })
    .catch((err) => {
      Promise.reject(dispatch(actions.registerFailed(err)));
    });
};
