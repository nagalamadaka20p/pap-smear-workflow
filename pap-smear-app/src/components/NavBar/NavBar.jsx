import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <div className="navbar-container">
            <Link to="/providers" className="menuhover">
              <li>
                <h2>PROVIDERS</h2>
              </li>
            </Link>
            <Link to="/survey" className="menuhover">
              <li>
                <h2>SURVEY</h2>
              </li>
            </Link>
            <Link to="/" className="menuhover">
              <li>
                <h2>HOME</h2>
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
