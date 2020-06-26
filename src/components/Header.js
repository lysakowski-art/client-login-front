import React from 'react';
import LoginPanel from './LoginInputComponents/LoginPanel'
import Welcome from './Welcome'

const Header = (props) => {
    const {cookieStatus} = props;
    return ( 
        <header>
            {cookieStatus.loggedIn ? <Welcome cookieStatus={cookieStatus}/> : <LoginPanel/>}
        </header>
     );
}
 
export default Header;