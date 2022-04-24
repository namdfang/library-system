import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PublicLayout from "../../layouts/PublicLayout/PublicLayout";
import LoadingPage from "../../components/Loading/LoadingPage";
import { PATH } from "../../constants/path";
import { register } from "../Register/Register.thunks";
import { changeErrorMessage } from "./Register.actions";
import * as validation from "../../constants/validation";
import "./Register.scss";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const [passConfirm, setPassConfirm] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passConfirmError, setPassConfirmError] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const registerState = useSelector((state) => ({
    loading: state.register.loading,
    errorMessage: state.register.errorMessage,
    isSuccess: state.register.isSuccess,
  }));

  useEffect(() => {
    if (registerState.isSuccess) {
      history.push(PATH.LOGIN);
    }
  }, [registerState.isSuccess]);

  const handleName = (e) => {
    setNameError("");
    dispatch(changeErrorMessage(""));
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmailError("");
    dispatch(changeErrorMessage(""));
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhoneError("");
    dispatch(changeErrorMessage(""));
    setPhone(e.target.value);
  };

  const handleUserName = (e) => {
    setUsernameError("");
    dispatch(changeErrorMessage(""));
    setAccount({ ...account, username: e.target.value });
  };

  const handlePassword = (e) => {
    setPasswordError("");
    dispatch(changeErrorMessage(""));
    setAccount({ ...account, password: e.target.value });
  };

  const handlePassConfirm = (e) => {
    setPassConfirmError("");
    dispatch(changeErrorMessage(""));
    setPassConfirm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setNameError(validation.REQUIRED);
    }
    if (!email.trim()) {
      setEmailError(validation.REQUIRED);
    } else if (!validation.EMAIL_FORMAT.test(email)) {
      setEmailError(validation.INVALID_EMAIL);
    }
    if (!phone.trim()) {
      setPhoneError(validation.REQUIRED);
    } else if (!validation.PHONE_FORMAT.test(phone)) {
      setPhoneError(validation.INVALID_PHONE);
    }
    if (!account.username.trim()) {
      setUsernameError(validation.REQUIRED);
    }
    if (!account.password.trim()) {
      setPasswordError(validation.REQUIRED);
    } else if (
      account.password.trim().length < validation.PASSWORD_MIN_LENGTH
    ) {
      setPasswordError(validation.MIN_PASSWORD);
    }
    if (!passConfirm.trim()) {
      setPassConfirmError(validation.REQUIRED);
    } else if (account.password.trim() !== passConfirm.trim()) {
      setPassConfirmError(validation.WRONG_PASSWORD);
    } else if (
      name.trim() &&
      email.trim() &&
      validation.EMAIL_FORMAT.test(email) &&
      phone.trim() &&
      validation.PHONE_FORMAT.test(phone) &&
      account.username.trim() &&
      account.password.trim() &&
      account.password.trim().length >= validation.PASSWORD_MIN_LENGTH
    ) {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        account: {
          username: account.username.trim(),
          password: account.password.trim(),
        },
      };
      dispatch(register(payload));
    }
  };

  return (
    <PublicLayout
      styleForm="register-container"
      greeting="Welcome to Squad 3 library!"
      title="Create account"
    >
      <div>
        {registerState.errorMessage && (
          <div className="text-center rounded-1 mb-3 sign-up-error">
            <p>{registerState.errorMessage}</p>
          </div>
        )}
        <div className="mb-3">
          <label className="form-label label">Full name</label>
          <span className="text-danger px-1 fw-bold">*</span>
          <input
            type="text"
            className="form-control border-0 border-bottom py-2 "
            placeholder="Enter your full name"
            value={name}
            onChange={handleName}
          />
          <p className="text-danger fst-italic my-1 text-message">
            {nameError}
          </p>
        </div>
        <div className="mb-3">
          <label className="form-label label">Email</label>
          <span className="text-danger px-1 fw-bold">*</span>
          <input
            type="email"
            className="form-control border-0 border-bottom py-2"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmail}
          />
          <p className="text-danger fst-italic my-1 text-message">
            {emailError}
          </p>
        </div>
        <div className="mb-3">
          <label className="form-label label">Phone number</label>
          <input
            type="tel"
            className="form-control border-0 border-bottom py-2"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhone}
          />
          <p className="text-danger fst-italic my-1 text-message">
            {phoneError}
          </p>
        </div>
        <div className="mb-3">
          <label className="form-label label">Username</label>
          <span className="text-danger px-1 fw-bold">*</span>
          <input
            type="text"
            className="form-control border-0 border-bottom py-2"
            placeholder="Enter your username"
            value={account.username}
            onChange={handleUserName}
          />
          <p className="text-danger fst-italic my-1 text-message">
            {usernameError}
          </p>
        </div>
        <div className="mb-3">
          <label className="form-label label">Password</label>
          <span className="text-danger px-1 fw-bold">*</span>
          <input
            type="password"
            className="form-control border-0 border-bottom py-2"
            placeholder="Enter your password"
            value={account.password}
            onChange={handlePassword}
          />
          <p className="text-danger fst-italic my-1 text-message">
            {passwordError}
          </p>
        </div>
        <div className="mb-3">
          <label className="form-label label">Confirm password</label>
          <span className="text-danger px-1 fw-bold">*</span>
          <input
            type="password"
            className="form-control border-0 border-bottom py-2"
            placeholder="Confirm your password"
            value={passConfirm}
            onChange={handlePassConfirm}
          />
          <p className="text-danger fst-italic my-1 text-message">
            {passConfirmError}
          </p>
        </div>
        <div className="d-grid mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onSubmit}
            disabled={
              nameError ||
              emailError ||
              phoneError ||
              usernameError ||
              passwordError ||
              passConfirmError ||
              registerState.errorMessage
            }
          >
            Sign up
          </button>
        </div>
        <div className="login mt-2 d-flex justify-content-center">
          <div>Already have an account?</div>
          <Link
            className="mx-1 text-primary text-decoration-none"
            to={PATH.LOGIN}
          >
            Sign in
          </Link>
        </div>
      </div>
      {registerState.loading && <LoadingPage />}
    </PublicLayout>
  );
}
