import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SocialLoginButton from "../../components/socialLoginButton";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";
import gmail from "../../img/gmail.png";
import Field from "../../components/field";
import "./index.css";
import { getAllUsers } from "../../services";

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({});
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleRegister = () => {
    history.push("/register");
  };

  const handleResetPassword = () => {
    history.push("/forgotpassword");
  };

  const getUsers = useCallback(async () => {
    const data = await getAllUsers();
    setLogin(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const onChangeMail = (event) => {
    setMail(event.target.value);
    setError(false);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    setError(false);
  };

  const handleLogin = () => {
    const isLoggedIn = login.find(
      (item) => item.username === mail && item.password === password
    );
    if (isLoggedIn) {
      setAlert(true);
    } else {
      setError(true);
    }
  };
  return (
    <div className="login-container">
      <div className="login-area">
        <div className="login-field">
          <div className="login-title">
            <p>Your Logo</p>
          </div>
          <div className="login-form-title">
            <p>Login</p>
          </div>
          <div className="input-area">
            <Field
              onChange={onChangeMail}
              value={login.password}
              type="email"
              label="Email"
              placeholder="username@gmail.com"
              inputName="email"
            />
            <Field
              onChange={onChangePassword}
              value={login.username}
              type="password"
              label="Password"
              placeholder="Password"
              inputName="password"
            />
            {alert && <div className="alert-true">Succsesful!</div>}
            {error && (
              <div className="alert">Username or password is wrong!</div>
            )}
          </div>
          <div className="left-bottom-label">
            <p className="change-password" onClick={handleResetPassword}>
              Forgot Password
            </p>
          </div>
          <div className="login-button-area">
            <button className="login-button" onClick={handleLogin}>
              Sign in
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
            <div className="register-area">
              <p className="account-text">Don’t have an account yet?</p>
              <p className="register-text" onClick={handleRegister}>
                Register for free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
