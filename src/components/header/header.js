import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logOutAction } from "../../redux/actions/auth";
import Show from "../show";

const Header = () => {
    const history = useHistory();
    const loggedIn = localStorage.getItem('loggedIn');
    const isAdmin = localStorage.getItem('isAdmin');
    const dispatch = useDispatch();
    const { isAdmin: adminSigned, loggedIn: isLogged } = useSelector(state => state.auth);
    useEffect(() => {
        if ((isLogged || loggedIn) && !isAdmin) history.push('/viewmyfunds');
        if (isAdmin) history.push('/users')
    }, [adminSigned, isLogged]);

    function logOutHandler() {
        dispatch(logOutAction())
    }

    return (
        <>
            <header className="top">
                <img src="large_seedingfund-01.png" width="100" height="75" alt="Seeding Fund" />
                <nav className="menu">
                    <Show show={!loggedIn}>
                        <Link className="link" to="/">Login</Link>
                        <Link className="link" to="/admin">Admin Login</Link>
                        <Link className="link" to="/register">Register</Link>
                    </Show>
                    <Show show={loggedIn}>
                        <Show show={!isAdmin}>
                            <Link className="link" to="/requestfund"> Request Fund </Link>
                            <Link className="link" to="/viewmyfunds"> My Fund Reuests </Link>
                        </Show>
                        <Show show={isAdmin}>
                            <Link className="link" to="/users">Users Fund Requests</Link>
                            <Link className="link" to="/chart">Chart</Link>
                        </Show>
                        <Link className="link" onClick={logOutHandler} to="/">Log out</Link>
                    </Show>

                </nav>
            </header>
        </>
    );
}

export default Header;