import React from "react";

const LoginInput = (props) => {
  const { username, handleLoginInput } = props;

  const handleLoginChange = (e) =>{
    handleLoginInput(e.target.value)
  }

  return (
    <label>
      Login
      <input type="text" value={username} onChange={handleLoginChange} />
    </label>
  );
};

export default LoginInput;
