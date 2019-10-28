import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    const navStyle = {
        color : 'white',
        textDecoration : 'none'
    }

        return(
            <nav>
                <h3>
                    <Link style={ navStyle }  to="/">Logo</Link>
                </h3>
                <ul className="nav-links">
                        <li>
                            <Link style={ navStyle } to="/about">About</Link>
                        </li>
                        <li>
                            <Link style={ navStyle } to="/shop">Shop</Link>
                        </li>
                </ul>
            </nav>
        )
}


export default Nav;