import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black p-0 mono">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto text-center mono">
          <li className={window.location.pathname === "/apps" ? "active nav-item mx-5" : "nav-item mx-5"}>
            <Link to="/apps" className="nav-link">APPS</Link>
          </li>
          <li className={window.location.pathname === "/websites" ? "active nav-item mx-5" : "nav-item mx-5"}>
            <Link to="/websites" className="nav-link">WEBSITES</Link>
          </li>
          <li className={window.location.pathname === "/games" ? "active nav-item mx-5" : "nav-item mx-5"}>
            <Link to="/games" className="nav-link">GAMES</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
