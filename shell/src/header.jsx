import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <header>
            <h1>FRONTENDS</h1>
            <nav className="horizontal-nav">
                <Link to="/">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/user">Users</Link>
                        <Link to="/ticket"> Tickets</Link>
                        <Link to="/payment"> Payments</Link>
                        <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/registration">Registration</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
