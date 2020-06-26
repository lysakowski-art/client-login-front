import React from 'react';

const SubmitButton = (props) => {
    const {handleSendData, name} = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendData();
    }
    return ( 
        <button onClick={handleSubmit}>{name}</button>
     );
}
 
export default SubmitButton;