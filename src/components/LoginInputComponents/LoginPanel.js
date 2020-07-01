import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

const LoginPanel = (props) => {
  const { username, setUsername,handleVisible } = props;
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({});
  const URL_AUTH = "http://127.0.0.1:8000/auth";

  const handleLoginInput = (loginCallback) => {
    setUsername(loginCallback);
  };
  const handlePasswordInput = (passwordCallback) => {
    setPassword(passwordCallback);
  };
  const handleSendData = () => {
    axios
      .post(URL_AUTH, values, { withCredentials: true })
      .then((res) => {
        // console.log(`status code: ${res.status}`);
        // console.log(res);
        if (res.status === 200) {
          handleVisible(true);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setValues({
      login: username,
      password: password,
    });
  }, [username, password]);

  return (
    <>
      <form>
        <LoginInput username={username} handleLoginInput={handleLoginInput} />
        <PasswordInput
          password={password}
          handlePasswordInput={handlePasswordInput}
        />
        <SubmitButton handleSendData={handleSendData} name="Log In" />
      </form>
    </>
  );
};

export default LoginPanel;
