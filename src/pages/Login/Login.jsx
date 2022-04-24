import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PublicLayout from "../../layouts/PublicLayout/PublicLayout";
import { changeErrorMessage } from "./Login.actions";
import { login } from "./Login.thunks";
import { PATH } from "../../constants/path";
import * as validation from "../../constants/validation";
import "./Login.scss";
import LoadingPage from "../../components/Loading/LoadingPage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const loginState = useSelector((state) => ({
    loading: state.login.loading,
    accessToken: state.login.accessToken,
    errorMessage: state.login.errorMessage,
  }));

  useEffect(() => {
    if (loginState.accessToken) {
      history.push(PATH.HOME);
    }
  }, [loginState.accessToken]);

  const handleUsername = (e) => {
    setUserNameError("");
    dispatch(changeErrorMessage(""));
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordError("");
    dispatch(changeErrorMessage(""));
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setUserNameError(validation.REQUIRED);
    }
    if (!password.trim()) {
      setPasswordError(validation.REQUIRED);
    }
    // else if (password.trim().length < validation.PASSWORD_MIN_LENGTH) {
    //   setPasswordError(validation.MIN_PASSWORD);
    // }
    else if (username.trim() && password.trim()) {
      const payload = { username: username.trim(), password: password.trim() };
      dispatch(login(payload));
    }
  };

  return (
    <PublicLayout
      styleForm="login-container"
      greeting="Welcome to Squad 3 library!"
      title="Sign in to your account"
    >
      <div>
        {loginState.errorMessage && (
          <div className=" text-center rounded-1 mb-3 login-error">
            <p>{loginState.errorMessage}</p>
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="username" className="form-label label">
            Username or email
          </label>
          <input
            type="text"
            className="form-control border-0 border-bottom py-2"
            id="username"
            value={username}
            onChange={handleUsername}
          />
          {usernameError && (
            <p className="text-danger fst-italic text-message">
              {usernameError}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label label">
            Password
          </label>
          <input
            type="password"
            className="form-control border-0 border-bottom py-2"
            id="password"
            value={password}
            onChange={handlePassword}
          />
          {passwordError && (
            <p className="text-danger fst-italic text-message">
              {passwordError}
            </p>
          )}
        </div>
        <div className="form-check mb-0">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck"
          />
          <label className="form-check-label label" htmlFor="exampleCheck">
            Remember me
          </label>
        </div>
        <div className="d-grid mt-5">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onSubmit}
            disabled={
              passwordError ||
              usernameError ||
              loginState.errorMessage ||
              loginState.loading
            }
          >
            Sign in
          </button>
        </div>
        <div className="register mt-4 d-flex justify-content-center">
          <div>Don't have an account?</div>
          <Link
            className="mx-1 text-primary text-decoration-none"
            to={PATH.REGISTER}
          >
            Sign up now
          </Link>
        </div>
      </div>
      {loginState.loading && <LoadingPage />}
    </PublicLayout>
  );
};

export default Login;
