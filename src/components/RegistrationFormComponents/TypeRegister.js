import React from "react";

const TypeRegister = (props) => {
  const { type, handleTypeInput } = props;

  const handleTypeInputChange = (e) => {
    handleTypeInput(e.target.value);
  };

const types =["User", "Moderator", "Admin"];
const listOfOptions = types.map((el, index) => <option key={index} value={el}>{el}</option>)  
return (
    <select name="Type" value={type} onChange={handleTypeInputChange}>
      {listOfOptions}
    </select>
  );
};

export default TypeRegister;
