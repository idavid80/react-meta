import "./Footer.css";
import React from "react";
import restaurant from "../../icons_assets/restaurant.jpg";
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <img src={restaurant} className="restaurant" alt="restaurant" />
      <div className="footer-menu ">
        <ul>
          <h4>Contact</h4>

          <li><a href="mailito:info@littlelemon.com"> email</a></li>
          <li><a href="tel:+3445145874">Phone</a></li>
          <li><a href="https://www.google.com/search?q=9249%2BJ7+Sevilla"> Ubication</a></li>
        </ul>

        <ul>
          <h4>Navigate</h4>

          <li><a href="/#home">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#menu">Menu</a></li>
          <li><a href="/#reservations">Reservations</a></li>
          <li><a href="/#order">Order online</a></li>
          <li><a href="/#login">Login</a></li>
        </ul>

        <ul>
          <h4>Social Media</h4>
          <li><a href="www.facebook.com">Facebook</a></li>
          <li><a href="www.whatsapp.com">Whatsapp</a></li>
          <li><a href="www.instagram.com">Instagram</a></li>
        </ul>
      </div>
      <div className="copywright">
        <p>© Little Lemon </p>
      </div>
    </footer>
  );
};

export default Footer;
