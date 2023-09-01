import React from 'react';
import BookingForm from './BookingForm'; // Import your BookingForm component
import { useNavigate } from 'react-router-dom'; // Import useNavigate from your routing library
import "./BookingPage.css";
import Header from '../Components/header/Header';
import chekDate from "../utilities/API";

/* const availableTimesReducer = (state, action) => {
  // Update state based on action (date)
  //const date = state.filter((item) => item !== action.item);
  return state; // For now, return the same state
};
 */





function BookingPage() {

/*   const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const updateTimes = (date) => {
    // Update available times based on the selected date
    dispatch(date); // For now, pass the selected date directly
  };

  const initializeTimes = () => {
    // Initialize available times
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }; */

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    chekDate()
    let response = await (formData.name && formData.occasion) && (formData.guests > 2) && (formData.time.slice(0,1) > chekDate().time.slice(0,2))? true : false

    try {
    // we need backend to check booking is avaible;
    //  const response = await submitForm(formData);
    //  const response = true;
      if (response === true) {
        navigate('/booking-confirmed');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='booking'>
      <Header />
      <BookingForm submitForm={submitForm} />)
      {/*
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        initializeTimes={initializeTimes}
      />
    </div>
 */}
    </div>
  );
}

export default BookingPage;



