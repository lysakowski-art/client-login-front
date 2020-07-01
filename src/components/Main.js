import React from "react";
import RegistrationForm from "./RegistrationFormComponents/RegistrationForm";
import Home from "./Home";

const Main = (props) => {
  const { cookieStatus, isVisible } = props;
  return (
    <main>
      {isVisible ? (
        <Home cookieStatus={cookieStatus} />
      ) : (
        <RegistrationForm />
      )}
    </main>
  );
};

export default Main;
