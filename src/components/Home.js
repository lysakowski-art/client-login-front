import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [cookieStatus, setCookieStatus] = useState(false);
  const API_ISCOOKIE = "http://127.0.0.1:8000/cookie";

  useEffect(() => {
    axios
      .get(API_ISCOOKIE, { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setCookieStatus(true);
        }
      })
      .catch((error) => console.log(error));
  }, [cookieStatus]);
  console.log(cookieStatus);
  return (
    <>
      {cookieStatus ? (
        <h1>Hello my man</h1>
      ) : (
        <h2>
          Welcome, if you want to join the game, at first you should log in
        </h2>
      )}
    </>
  );
};

export default Home;
