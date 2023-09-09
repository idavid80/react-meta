import logo from "../../icons_assets/logo.svg";
//import Nav from "../nav/Nav";
import Navbar from "../nav/NavBar";
import "./Header.css";
//import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Icono de hamburguesa
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu />

        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
