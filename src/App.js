import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";

const App = () => {
  const [cookieStatus, setCookieStatus] = useState({});
  const [isVisible, setVisible] = useState(false);

  const URL_TEMP = "http://127.0.0.1:8000/temp";

  const handleVisible = (callback) => {
    setVisible(callback);
  };

  useEffect(() => {
    axios
      .get(URL_TEMP, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          if (Object.entries(cookieStatus).length === 0) {
            if (res.data.loggedIn === true) {
              console.log(cookieStatus);
              setCookieStatus(res.data);
              console.log(cookieStatus);
              console.log("temp coś zwraca");
              console.log(res.data);
              setVisible(true);
              // czemu to się nie ustawia?
            }
          }
        } else if (res.status === 404) {
          console.log("brak");
        }
      })
      .catch((error) => console.log(error));
  }, [cookieStatus]);
  // do dependencji nie dałem cookieStatus, bo mieli = czy może setInterval 3000ms?

  return (
    <>
      <Header
        isVisible={isVisible}
        handleVisible={handleVisible}
        cookieStatus={cookieStatus}
      />
      <br />
      <Main
        isVisible={isVisible}
        handleVisible={handleVisible}
        cookieStatus={cookieStatus}
      />
    </>
  );
};

export default App;
