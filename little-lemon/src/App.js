import React from "react";
/* import "./App.css"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage"; // Import your actual components
// import BookingForm from './BookingForm';
import BookingPage from "./booking/BookingPage";
import ContactMeSection from "./booking/ContactMeSection";
import ScrollToHashElement from "./Components/ScrollToHashElement";
import ConfirmedBooking from "./booking/ConfirmedBooking";
// import Chicago from "./Main/Chicago";
//import Specials from './Main/Specials';

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactMeSection />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
