import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function MenuNav() {
  return (
    <div className="navbar">
      <Link className="nav_link" to="/menu">
        Currencies
      </Link>
      <Link className="nav_link" to="/global">
        Global Data
      </Link>
      <Link className="nav_link" to="/">
        Log out
      </Link>
    </div>
  );
}
