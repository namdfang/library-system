import { combineReducers } from "redux";
import { loginReducer } from "../pages/Login/Login.reducer";
import { appReducer } from "../App/App.reducer";
import { registerReducer } from "../pages/Register/Register.reducer";
import { documentReducer } from "../pages/HomeCms/Document.reducer";
import { categoryReducer } from "../pages/Category/Category.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  register: registerReducer,
  document: documentReducer,
  category: categoryReducer,
});

export default rootReducer;
