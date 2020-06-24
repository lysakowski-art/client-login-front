import React from 'react';
import { NavLink} from "react-router-dom"

const Navigation = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <NavLink exact to='/'>Home</NavLink> 
                </li>
                <li>
                    <NavLink to='/auth'>Login</NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default Navigation;