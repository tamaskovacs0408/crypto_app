import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

export default function MenuNav() {
  const [showNavbar, setshowNavbar] = useState(false);

  return (
    <div className="navbar">
      <h2 className="logo">Crypt app</h2>
      <nav className={showNavbar ? "navbar-visible" : ""}>
        <Link
          className="nav_link"
          to="/menu"
          onClick={() => setshowNavbar(false)}
        >
          Currencies
        </Link>
        <Link
          className="nav_link"
          to="/global"
          onClick={() => setshowNavbar(false)}
        >
          Global Data
        </Link>
        <Link className="nav_link" to="/" onClick={() => setshowNavbar(false)}>
          Log out
        </Link>
      </nav>
      <FontAwesomeIcon
        className="hamburger_icon"
        onClick={() => setshowNavbar(true)}
        icon={faBars}
      />
    </div>
  );
}
