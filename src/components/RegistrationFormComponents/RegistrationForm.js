import React, { useEffect, useState } from "react";
import LoginRegister from "./LoginRegister";
import PasswordRegister from "./PasswordRegister";
import EmailRegister from './EmailRegister';
import TypeRegister from './TypeRegister';
import SubmitButton from '../LoginInputComponents/SubmitButton'
import axios from 'axios'

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [registerValues, setRegisterValues] = useState({})

  const REGISTER_URL = "http://127.0.0.1:8000/register"

  const handleLoginInput = (loginCallback) => {
    setUsername(loginCallback);
  };
  const handlePasswordInput = (passwordCallback) => {
    setPassword(passwordCallback);
  };
  const handleEmailInput = (emailCallback) => {
    setEmail(emailCallback)
  }
  const handleTypeInput = (typeCallback) =>{
    setType(typeCallback)
  }

  const handleSendData = () => {
    axios
      .post(REGISTER_URL, registerValues, { withCredentials: true })
      .then((res) => {
        console.log(`status code: ${res.status}`);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    setRegisterValues({
      username,
      password,
      email,
      type
    })
  },[username, password, email, type])

  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <LoginRegister
          username={username}
          handleLoginInput={handleLoginInput}
        />
        <br />
        <br />
        <PasswordRegister
          password={password}
          handlePasswordInput={handlePasswordInput}
        />
        <br />
        <br />
        <EmailRegister email={email} handleEmailInput={handleEmailInput}/>
        <br/>
        <br/>
        <TypeRegister type={type} handleTypeInput={handleTypeInput}/>
        <br/>
        <br/>
        <SubmitButton handleSendData={handleSendData} name="Sign In"/>
      </form>
    </div>
  );
};

export default RegistrationForm;
