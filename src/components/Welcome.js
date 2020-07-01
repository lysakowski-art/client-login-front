import React from 'react';
import Logout from "../components/LogoutPanel/Logout";


const Welcome = (props) => {
    const {cookieStatus, username, handleVisible } = props;

    return ( 
        <>
            <h3>Welcome <u style={{color: "red"}}>{cookieStatus.loggedIn ? cookieStatus.username : username}</u>!</h3>
            <Logout handleVisible={handleVisible}/>
        </>
     );
}
 
export default Welcome;