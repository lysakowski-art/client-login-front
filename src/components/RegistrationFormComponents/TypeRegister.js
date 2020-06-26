import React from "react";

const TypeRegister = (props) => {
  const { type, handleTypeInput } = props;

  const handleTypeInputChange = (e) => {
    handleTypeInput(e.target.value);
  };

  return (
    <select name="Type" value={type} onChange={handleTypeInputChange}>
      <option value="admin">Admin</option>
      <option value="moderator">Moderator</option>
      <option value="user">User</option>
    </select>
  );
};

export default TypeRegister;
