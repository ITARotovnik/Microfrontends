import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Ticket Frontend</h1>
            <nav className="horizontal-nav">
                <Link to="/">Home</Link>
                <Link to="/user">Users</Link>
                <Link to="/ticket"> Tickets</Link>
                <Link to="/payment"> Payments</Link>


            </nav>
        </header>
    );
};

export default Header;