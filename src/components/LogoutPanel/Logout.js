import React from "react";
import axios from "axios";

const LOGOUT_URL = "http://127.0.0.1:8000/logout";

const Logout = (props) => {
  const { handleVisible } = props;

  const handleLogout = () => {
    axios
      .get(LOGOUT_URL, { withCredentials: true })
      .then((res) => {
        if (res.status) {
          handleVisible(false)
        }
      })

      .catch((err) => console.log(err));
  };

  return <button onClick={handleLogout}>Log Out</button>;
};

export default Logout;
