import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <header className="nav-brand">
        <h1>
          <Link to="/" className="nav-brand-link">
            Quiz App
          </Link>
        </h1>
      </header>
      <div>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
