// src/components/Navbar.js
//import React, { useState } from 'react';
//import { FiMenu } from 'react-icons/fi'; // Icono de hamburguesa
import "./Navbar.css";

import React from "react";
import "./Navbar.css";
import logo from "../../icons_assets/logo.svg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      {/* Desktop Navigation */}

      <div className="navbar-logo">
        <Link className="link" to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/booking"}>
          Reservation
        </Link>
        <HashLink
          className="link"
          to="/feedback"
          onClick={() => {
            setToggle(false);
          }}
        >
          Feedback
        </HashLink>
        <HashLink className="link" smooth to="/#menu">
          Menu
        </HashLink>
        <HashLink className="link" smooth to="/#about">
          About
        </HashLink>
      </ul>

      {/* Mobile Navigation */}

      <div className="navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
          className="navbar-hamburger"
        />
        {toggle && (
          <div>
            <HiX
              onClick={() => {
                setToggle(false);
              }}
              className="navbar-cancel"
            />

            <Link
              className="link"
              to={"/"}
              onClick={() => {
                setToggle(false);
              }}
            >
              Home
            </Link>
            <Link
              className="link"
              to={"/booking"}
              onClick={() => {
                setToggle(false);
              }}
            >
              Reservation
            </Link>
            <Link
              className="link"
              to="/feedback"
              onClick={() => {
                setToggle(false);
              }}
            >
              Feedback
            </Link>
            <HashLink
              className="link"
              smooth
              to="/#menu"
              onClick={() => {
                setToggle(false);
              }}
            >
              Menu
            </HashLink>
            <HashLink
              className="link"
              smooth
              to="/#about"
              onClick={() => {
                setToggle(false);
              }}
            >
              About
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
