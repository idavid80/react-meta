// import logo from "../icons_assets/logo.svg";
import "./Nav.css";
//import { Routes, Route, Switch } from "react-router-dom";
//import App from "../App";

import { Link } from "react-router-dom";

export default function Nav() {
  /*   const links = [
    "Home",
    "about",
    "Menu",
    "Reservations",
    "Order online",
    "Login",
  ]; */
  return (
    <nav className="nav">
      {/*        <Link>
        <img src={logo} className="logo" alt="logo" />
      </Link>  */}
      {/*       {links.map((link, i) => (
        <Link key={i} to={`#${link}`} className="nav-links">
          {link}
        </Link>
      ))} */}

      <Link to="/#home" className="nav-links">
        <button className="nav-button">Home</button>
      </Link>
      <Link to="/#about" className="nav-links">
        <button className="nav-button">About</button>
      </Link>
      <Link to="/#menu" className="nav-links">
        <button className="nav-button">Menu</button>
      </Link>
      <Link to="/booking" className="nav-links">
        <button className="nav-button">Reservations</button>
      </Link>
      <Link to="/contact" className="nav-links">
        <button className="nav-button">Order online</button>
      </Link>
      <Link to="#contact" className="nav-links">
        <button className="nav-button">Login</button>
      </Link>
    </nav>
  );
}
