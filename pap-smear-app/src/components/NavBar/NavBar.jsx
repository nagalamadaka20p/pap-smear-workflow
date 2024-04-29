import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <div className="navbar-container">
            <Link to="/pap-smear-workflow/providers" className="menuhover">
              <li>
                <h2>PROVIDERS</h2>
              </li>
            </Link>
            <Link to="/pap-smear-workflow/survey" className="menuhover">
              <li>
                <h2>SURVEY</h2>
              </li>
            </Link>
            <Link to="/pap-smear-workflow/" className="menuhover">
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
