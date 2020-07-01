import React from "react";

const Content = (props) => {
  const { typeOfUser } = props;

  if (typeOfUser === "Admin") {
    return <p>Only <b>ADMIN</b> can see this awesome content ;)</p>;
  } else if (typeOfUser === "Moderator") {
    return <p>Welcome my dear <b>MODERATOR</b></p>;
  } else if (typeOfUser === "User") {
    return <p>Ordinary <b>USER</b> at last...</p>
  }
};

export default Content;
