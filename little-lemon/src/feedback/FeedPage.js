import React from "react";
import NavBar from "../Components/nav/NavBar";
import ContactMeSection from "./ContactMeSection";
import "./FeedPage.css";
import CustomersSay from "../Components/main/CustomersSay";

function FeedPage() {
  return (
    <div className="feedback">
      <NavBar />
      <ContactMeSection />
      <CustomersSay />
    </div>
  );
}

export default FeedPage;
