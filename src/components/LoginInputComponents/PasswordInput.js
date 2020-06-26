import React from 'react';

const PasswordInput = (props) => {
    const {password, handlePasswordInput} = props;

    const handlePasswordChange = (e) => {
        handlePasswordInput(e.target.value)
    }
     
    return ( 
        <label htmlFor="password">Password
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
        </label>
     );
}
 
export default PasswordInput;