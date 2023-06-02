import React from "react";
import { Link } from "react-router-dom";
// import logo from "./pages/logo";
import logo from "../pages/logo.svg";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="navbar-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
        <ul className="nav-link">
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/about">About</link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
