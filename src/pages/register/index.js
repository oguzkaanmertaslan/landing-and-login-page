import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import SocialLoginButton from "../../components/socialLoginButton";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";
import gmail from "../../img/gmail.png";
import Field from "../../components/field";
import { createUser } from "../../services";

import "./index.css";

const Register = () => {
  const [newUser, setNewUser] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const mailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const onChangeMail = () => {
    setNewUser({ ...newUser, username: mailRef.current.value });
    setError(false);
  };
  const onChangePassword = () => {
    setNewUser({ ...newUser, password: passwordRef.current.value });
  };
  const handleRegister = () => {
    if (validateEmail(newUser.username) && newUser.password.length > 3) {
      setTimeout(() => {
        history.push("/login");
      }, 2000);
      addUser();
      setError(false);
    } else {
      setError(true);
    }
  };
  const addUser = async (event) => {
    await createUser(newUser);
    setNewUser({ username: event.target.value, password: event.target.value });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div className="login-container">
      <div className="login-area">
        <div className="login-field">
          <div className="login-title">
            <p>Your Logo</p>
          </div>
          <div className="login-form-title">
            <p>Register</p>
          </div>
          <div className="input-area">
            <Field
              fieldRef={mailRef}
              type="email"
              label="Email"
              placeholder="username@gmail.com"
              onChange={(event) => onChangeMail(event)}
              value={newUser.username}
            />
            {error && (
              <div className="alert">Please enter a valid email address</div>
            )}
            <Field
              fieldRef={passwordRef}
              type="password"
              label="Password"
              placeholder={"Password"}
              onChange={(event) => onChangePassword(event)}
              value={newUser.password}
            />
            {error && (
              <div className="alert">Please enter at least 3 characters</div>
            )}
          </div>
          <div className="login-button-area">
            <button className="login-button" onClick={handleRegister}>
              Register
            </button>
          </div>
          <div className="continue-area">
            <p className="continue-text">or continue with</p>
            <div className="social-buttons">
              <SocialLoginButton>
                <img src={gmail} alt="Gmail" />
              </SocialLoginButton>
              <SocialLoginButton>
                <img src={github} alt="GitHub" />
              </SocialLoginButton>
              <SocialLoginButton>
                <img src={facebook} alt="Facebook" />
              </SocialLoginButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
