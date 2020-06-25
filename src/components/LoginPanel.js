import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";

const LoginPanel = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({});

  const API_URL = "http://127.0.0.1:8000/auth";

  const handleLoginInput = (loginCallback) => {
    setUsername(loginCallback);
  };

  const handlePasswordInput = (passwordCallback) => {
    setPassword(passwordCallback);
  };

  const handleSendData = () => {
    axios
      .post(API_URL, values, { withCredentials: true })
      .then((res) => {
        console.log(`status code: ${res.status}`);
        console.log(res);
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
        <SubmitButton handleSendData={handleSendData} />
      </form>
    </>
  );
};

export default LoginPanel;
