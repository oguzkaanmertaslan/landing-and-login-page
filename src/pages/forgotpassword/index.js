import React, { useState, useRef, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Field from "../../components/field";
import "./index.css";
import { getAllUsers, updateUser } from "../../services";
const ForgotPassword = () => {
  const [resetPassword, setResetPassword] = useState({});
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const mailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const onChangeMail = (event) => {
    setMail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const getUsers = useCallback(async () => {
    const data = await getAllUsers();
    setResetPassword(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  const updateUserById = async (id, updatePassword) => {
    await updateUser(id, updatePassword);
    getUsers();
  };
  const handleSignIn = () => {
    resetPassword.find((item) => {
      setAlert(true);
      if (item.username == mail) {
        updateUserById(item.id, { password: password });
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    });
  };

  const emailCheck = () => {
    return (
      <div>
        <Field
          fieldRef={mailRef}
          type="email"
          label="Email"
          placeholder="username@gmail.com"
          onChange={(event) => onChangeMail(event)}
          value={resetPassword.username}
        />
        {error && (
          <div className="alert">Please enter a valid email address! </div>
        )}
        {alert && <div className="alert-true">Succsessful! </div>}
        <br />
        <br />
        <button
          className="reset-button"
          onClick={() => {
            resetPassword.find((item) => {
              if (item.username == mail) {
                setIsVisible(true);
                setError(false);
              } else {
                setError(true);
              }
            });
          }}
        >
          Check Email
        </button>
      </div>
    );
  };

  const resPassword = () => {
    return (
      <div>
        <Field
          fieldRef={mailRef}
          type="email"
          label="Email"
          placeholder="username@gmail.com"
          onChange={(event) => onChangeMail(event)}
          value={resetPassword.username}
          disabled="disabled"
        />
        <Field
          fieldRef={passwordRef}
          type="password"
          label="New Password"
          placeholder={"Password"}
          onChange={(event) => onChangePassword(event)}
          value={resetPassword.password}
        />
        <div className="login-button-area">
          <button className="reset-button" onClick={handleSignIn}>
            Reset Password
          </button>
        </div>
      </div>
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
            <p>Forgot Password</p>
          </div>
          <div className="input-area">
            {isVisible ? resPassword() : emailCheck()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
