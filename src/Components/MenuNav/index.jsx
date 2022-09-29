import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"

export default function MenuNav() {
  return (
    <div className="navbar">
        <Link to="/menu">Currencies</Link>
        <Link to="/global">Global Data</Link>
        <Link to="/">Log out</Link>
      </div>
  )
}
