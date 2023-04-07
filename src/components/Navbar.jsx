import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Restaurant
      </Link>
      <div className="right">
        <Link to="/login" className="login">
          Login
        </Link>
        <Link to="/signup" className="signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
