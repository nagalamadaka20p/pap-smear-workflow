import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <Link to="/pap-smear-workflow/glossary">
            <li className="menuhover1">
              <h2>GLOSSARY</h2>
            </li>
          </Link>
          <Link to="/pap-smear-workflow/faq">
            <li className="menuhover2">
              <h2>FAQ</h2>
            </li>
          </Link>
          <Link to="/pap-smear-workflow/">
            <li className="menuhover3">
              <h2>SURVEY</h2>
            </li>
          </Link>
          <Link to="/pap-smear-workflow/providers">
            <li className="menuhover4">
              <h2>PROVIDERS</h2>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
