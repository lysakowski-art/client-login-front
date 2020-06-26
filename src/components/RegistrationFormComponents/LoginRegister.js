import React from "react";

const LoginRegister = (props) => {
  const { username, handleLoginInput } = props;

  const handleLoginChange = (e) => {
    handleLoginInput(e.target.value);
  };

  return (
    <label>
      Username:
      <input
        type="text"
        value={username}
        placeholder="type your username"
        onChange={handleLoginChange}
      />
    </label>
  );
};

export default LoginRegister;
