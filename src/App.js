import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";

const App = () => {
  const [cookieStatus, setCookieStatus] = useState({});
  
  const API_ISCOOKIE = "http://127.0.0.1:8000/cookie";

  useEffect(() => {
    axios
      .get(API_ISCOOKIE, { withCredentials: true })
      .then((res) => {
         if (res.data) {
          setCookieStatus(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(cookieStatus);

  return (
    <>
      <Header cookieStatus={cookieStatus} />
      <br/>
      <Main cookieStatus={cookieStatus} />
    </>
  );
};

export default App;
