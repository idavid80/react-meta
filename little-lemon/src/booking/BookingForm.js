import React, { useState } from "react";
import "./BookingPage.css";
import chekDate from "../utilities/API";

// const BookingForm = ({ availableTimes, updateTimes, initializeTimes }) => {
const BookingForm = ({ submitForm }) => {
  chekDate()
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedOcassion, setSelectedOcassion] = useState("");
  // need backed to confirm available time on select day
   const availableTimes = [
    "13:00",
    "13:30",
    //  "14:00",
    "14:30",
    "15:00",
    //  "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    //  "18:30",
    "19:00",
    "19:30",
    "20:00",
    //  "20:30",
    "21:00",
    "21:30",
  ];

  

  let minDate = chekDate().date
  let minTime = chekDate().time

  const [formData, setFormData] = useState({
    // Initialize your form fields here
    name: "",
    guests: "1",
    date: minDate,
    time: minTime,
    occasion: "birthday",
  }); 
  const handleNameChange = (e) => {
    setName(e.target.value);
    setFormData({ ...formData, name: e.target.value });
  };

  const handleGuestChange = (e) => {
    setGuests(e.target.value);
    setFormData({ ...formData, guests: e.target.value });
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;

    setSelectedDate(newDate);

    setFormData({ ...formData, date: event.target.value });
  };
  console.log(formData)

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setFormData({ ...formData, time: event.target.value });
    console.log(selectedTime);
  };
  const handleOccasionChange = (event) => {
    setSelectedOcassion(event.target.value);
    setFormData({ ...formData, occasion: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  return (
    <div className="form-page">
      <form
        className="'booking-page'"
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        Book Now
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="guests">Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={handleGuestChange}
          min="1"
          required
        />
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          min={minDate}
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" min={minTime} onChange={handleTimeChange}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label>
          Occasion:
          <select
            name="occasion"
            value={selectedOcassion}
            onChange={handleOccasionChange}
            required
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
