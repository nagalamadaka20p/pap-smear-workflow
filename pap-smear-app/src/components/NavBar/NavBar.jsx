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
                <h2>PROVIDERS</h2>
                </li>
                <li className="menuhover">
                <h2>SURVEY</h2>
                </li>
                <li className="menuhover">
                <h2>HOME</h2>
                </li>
            </div>
          </ul>
      </nav>
    </div>
  );
}

export default NavBar;
