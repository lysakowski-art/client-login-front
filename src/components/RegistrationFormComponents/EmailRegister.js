import React from "react";

const EmailRegister = (props) => {
  const { email, handleEmailInput } = props;
  const handleEmailChange = (e) => {
    handleEmailInput(e.target.value);
  };

  return (
    <label>
      E-mail adress:
      <input
        type="email"
        value={email}
        placeholder="type your e-mail"
        onChange={handleEmailChange}
      />
    </label>
  );
};

export default EmailRegister;
