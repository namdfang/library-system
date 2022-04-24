import produce from "immer";
import * as types from "./Register.constants";

const initialState = {
  loading: false,
  errorMessage: "",
  isSuccess: false,
};

export const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.REGISTER_REQUESTED:
        draft.loading = true;
        draft.errorMessage = "";
        break;
      case types.REGISTER_SUCCESS:
        draft.loading = false;
        draft.isSuccess = true;
        break;
      case types.REGISTER_FAILED:
        draft.loading = false;
        draft.errorMessage = "Register Failed";
        break;
      case types.CHANGE_ERROR:
        draft.errorMessage = "";
        break;
      default:
        return state;
    }
  });
