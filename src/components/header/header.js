import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header className = "top">
                <nav>
                    <Link to="/register">Register</Link>
                    {/* remove br */}
                    <br/> 
                    <Link to="/login">Login</Link>
                </nav>
            </header>
        </>
    );
}

export default Header;