import logo from "../../icons_assets/logo.svg";
import Nav from "../nav/Nav";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" >
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <Nav />
    </header>
  );
}
