import produce from "immer";
import {
  updateLocalAccessToken,
  updateLocalRefreshToken,
} from "../../utilities/token";
import * as types from "./Login.constants";

const initialState = {
  accessToken: "",
  refreshToken: "",
  loading: false,
  errorMessage: "",
};

export const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_REQUESTED:
        draft.loading = true;
        draft.errorMessage = "";
        break;
      case types.LOGIN_SUCCESS:
        draft.loading = false;
        draft.accessToken = action.payload.access_token;
        draft.refreshToken = action.payload.refresh_token;
        updateLocalAccessToken(draft.accessToken);
        updateLocalRefreshToken(draft.refreshToken);
        break;
      case types.LOGIN_FAILED:
        draft.loading = false;
        draft.errorMessage = "Login Failed";
        break;
      case types.CHANGE_ERROR:
        draft.errorMessage = "";
        break;
      default:
        return state;
    }
  });
