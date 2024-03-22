import React from "react";
import "./NavBar.css";
// import { Link } from "react-router-dom";

function NavBar({
}) {
  return (
    <div className="navbar">
      <nav>
          <ul>
            <div className="navbar-container">
                <li className="menuhover">
                <h2>Home</h2>
                </li>
            </div>
          </ul>
      </nav>
    </div>
  );
}

export default NavBar;
