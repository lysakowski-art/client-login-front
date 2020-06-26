import React from "react";
import RegistrationForm from "./RegistrationFormComponents/RegistrationForm";
import Home from './Home'

const Main = (props) => {
const {cookieStatus} = props;
  return (
    <main>
      {cookieStatus.loggedIn ? <Home cookieStatus={cookieStatus}/> : <RegistrationForm />}
    </main>
  );
};

export default Main;
