import React from "react";

const PasswordRegister = (props) => {
    const {password, handlePasswordInput} = props;

    const handlePasswordChange = (e) => {
        handlePasswordInput(e.target.value)
    }

  return (
    <label>
      Password:
      <input type="password" value={password} placeholder="type your password" onChange={handlePasswordChange}/>
    </label>
  );
};

export default PasswordRegister;
