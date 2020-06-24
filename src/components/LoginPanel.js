import React, { useState, useEffect } from "react";
// import LoginInput from "./LoginInput";
// import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import axios from "axios";
const LoginPanel = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [values, setValues] = useState({});
  const [customers, setCustomers] = useState([]);

  const API_URL = "http://127.0.0.1:8000/someWebsite";

  // const handleLoginInput = (loginCallback) => {
  //   setUsername(loginCallback);
  // };

  // const handlePasswordInput = (passwordCallback) => {
  //   setPassword(passwordCallback);
  // };

  const handleSendData = () => {
    axios
      .get(API_URL)
      .then((res) => res.json())
      .then((customerData) => {
        return setCustomers(customerData);
      }, console.log("Customers fetched", customers));
  };

  // useEffect(() => {
  //   console.log(customers);
  // }, [customers]);

  // useEffect(() => {
  //   setValues({
  //     login: username,
  //     password: password,
  //   });
  // }, [username, password]);

  return (
    <>
      <form>
        {/* <LoginInput username={username} handleLoginInput={handleLoginInput} />
        <PasswordInput
          password={password}
          handlePasswordInput={handlePasswordInput}
        /> */}
        <SubmitButton handleSendData={handleSendData} />
      </form>
    </>
  );
};

export default LoginPanel;
