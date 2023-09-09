import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage"; // Import your actual components
import BookingPage from "./booking/BookingPage";
import FeedPage from "./feedback/FeedPage";
// import ScrollToHashElement from "./Components/ScrollToHashElement";
import ConfirmedBooking from "./booking/ConfirmedBooking";
import Restaurant from "./Components/restaurant/Restaurant";

const App = () => {
  return (
    <Router>
      {/*       <ScrollToHashElement /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/feedback" element={<FeedPage />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
