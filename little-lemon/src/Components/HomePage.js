// HomePage.js
import React from "react";
import Hero from "./main/Hero";
import Specials from "./main/Specials";
import CustomersSay from "./main/CustomersSay";
import Chicago from "./main/Chicago";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="root">
      <Header />
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </div>
  );
};

export default HomePage;
