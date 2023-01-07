import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <div className="logo__image">
        <img className="logo" src="./Images/logoImage.svg" alt="logo" />
        <h3>Tiny Leaf Tea house</h3>
      </div>
      <nav>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="nav__item">
            <Link to="/Reservation">Reservation</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Header
