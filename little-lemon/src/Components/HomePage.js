
import React from "react";
import Hero from "./main/Hero";
import Specials from "./main/Specials";
import CustomersSay from "./main/CustomersSay";
import Chicago from "./main/Chicago";
import Footer from "./footer/Footer";
import "./HomePage.css";
import NavBar from "./nav/NavBar";

const HomePage = () => {
  return (
    <div className="root">
      <NavBar />
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </div>
  );
};

export default HomePage;
