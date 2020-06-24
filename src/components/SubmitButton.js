import React from 'react';

const SubmitButton = (props) => {
    const {handleSendData} = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendData();
    }
    return ( 
        <button onClick={handleSubmit}>Log in</button>
     );
}
 
export default SubmitButton;