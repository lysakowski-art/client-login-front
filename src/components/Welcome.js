import React from 'react';

const Welcome = (props) => {
    const {cookieStatus} = props
    return ( 
        <>
            <h3>Welcome {cookieStatus.username}</h3>
        </>
     );
}
 
export default Welcome;