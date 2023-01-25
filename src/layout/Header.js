import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../Images/logoImage.svg";
import Menu from "../Images/menu.svg";
import Close from "../Images/close.svg";
import LogoText from "../Images/Tiny Leaf Tea House.svg"

function Header() {
  const [Flag, setFlag] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img className="logo__image" src={Logo} alt="logo" />
        <img className="logo__text" src={LogoText} alt="logo" />
      </div>

      {/* <nav className={Flag ? "nav-show" : "nav-large"}>
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
      </nav> */}

      <div className={`right-nav ${Flag ? "small" : "large"}`}>
        <div className="nav-link">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="nav-link">
          <Link className="link" to="menu">
            Menu
          </Link>
        </div>
        <div className="nav-link">
          <Link className="link" to="Reservation">
            Reservation
          </Link>
        </div>
      </div>
      {Flag ? (
        <img
          className="menu__icon"
          src={Close}
          alt=""
          onClick={() => {
            setFlag(!Flag);
          }}
        />
      ) : (
        <img
          className="menu__icon"
          src={Menu}
          alt=""
          onClick={() => {
            setFlag(!Flag);
          }}
        />
      )}
      {/* <Outlet /> */}
    </div>
  );
}

export default Header;
