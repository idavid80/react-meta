import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});



test('initializeTimes function returns the expected value', () => {
  const initialState = {
    // your initial state here
    time: ['17:00', '18:00', '19:00', '20:00', '21:00']
  };

  const expectedState = {
    // your expected state after initializing times
    time: ['17:00', '18:00', '19:00', '20:00', '21:00']
  };

  const newState = initializeTimes(initialState);
  expect(newState).toEqual(expectedState);
});

test('updateTimes function returns the same value as provided in the state', () => {
  const initialState = {
    // your initial state here
  };

  const updatedState = updateTimes(initialState); // In this case, updateTimes might not modify the state, so it returns the same state

  expect(updatedState).toEqual(initialState);
});