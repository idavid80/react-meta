import Navbar from "../Components/nav/NavBar";
import "./ConfirmedBooking.css";
import React from "react";

const ConfirmedBooking = () => {

  const saveName = localStorage.getItem("name");
  const saveguests = localStorage.getItem("guests");
  const saveDate = localStorage.getItem("date");
  const saveTime = localStorage.getItem("time");

  return (
    <div>
      <Navbar />
      <div className="thanks">
        <h2>Booking Confirmed</h2>
        <h4>Reservations by {saveName}:</h4>
        <p>
          {saveguests} guests, on {saveDate} at {saveTime}.
        </p>
        <p>Thank you for choosing our service!</p>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
