import React, { useState } from "react";
import LoginPanel from "./LoginInputComponents/LoginPanel";
import Welcome from "./Welcome";

const Header = (props) => {
  const [username, setUsername] = useState("");
  const {cookieStatus, isVisible, handleVisible } = props;

  return (
    <header>
      {isVisible ? (
        <Welcome
          isVisible={isVisible}
          handleVisible={handleVisible}
          cookieStatus={cookieStatus}
          username={username}
        />
      ) : (
        <LoginPanel
          handleVisible={handleVisible}
          username={username}
          setUsername={setUsername}
          cookieStatus={cookieStatus}
        />
      )}
      <br />
    </header>
  );
};

export default Header;
