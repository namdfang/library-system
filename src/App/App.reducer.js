import produce from "immer";
import { LOGIN_SUCCESS } from "../pages/Login/Login.constants";

const initialState = {
  isAuthenticated: false,
};

export const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        break;
      default:
        return state;
    }
  });
