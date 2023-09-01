import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import Specials from "./Main/Specials";
import Hero from "./Main/Hero";


test('Renders the Hero heading', () => {
  render(<Hero />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});


