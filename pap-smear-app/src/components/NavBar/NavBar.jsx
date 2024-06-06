import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="table-row">
        <Link to="/" className="menuhover1 table-cell">
          <h2>SURVEY</h2>
        </Link>
        <Link to="/providers" className="menuhover2 table-cell">
          <h2>PROVIDERS</h2>
        </Link>
        <Link to="/faq" className="menuhover3 table-cell">
          <h2>FAQ</h2>
        </Link>
        <Link to="/glossary" className="menuhover4 table-cell">
          <h2>GLOSSARY</h2>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
