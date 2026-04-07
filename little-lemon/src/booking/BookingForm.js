import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Box,
  HStack,
} from "@chakra-ui/react";
import chekDate from "../utilities/API";

const BookingForm = ({ submitForm, activeStep, setActiveStep }) => {
  const currentData = chekDate();
  const minDate = currentData.date;

  const [formData, setFormData] = useState({
    name: "",
    guests: 1,
    date: minDate,
    time: "13:00",
    occasion: "birthday",
  });

  const availableTimes = [
    "13:00", "13:30", "14:30", "15:00", "16:00", "16:30", 
    "17:00", "17:30", "18:00", "19:00", "19:30", "20:00", "21:00", "21:30"
  ];

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    const fieldName = id || name;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleGuestChange = (valueString) => {
    setFormData((prev) => ({ ...prev, guests: valueString }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('booking_data', JSON.stringify(formData));
    submitForm(formData);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="100%">
      <VStack spacing={5}>
        
        {activeStep === 0 && (
          <VStack spacing={5} w="100%" align="stretch">
            <Heading size="sm" color="#495e57">Personal Details</Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                focusBorderColor="#f4ce14"
              />
            </FormControl>
            <Button 
              type="button" 
              colorScheme="yellow" 
              onClick={() => setActiveStep(1)}
              isDisabled={!formData.name}
            >
              Next: Date & Time
            </Button>
          </VStack>
        )}

        {activeStep === 1 && (
          <VStack spacing={5} w="100%" align="stretch">
            <Heading size="sm" color="#495e57">Visit Details</Heading>
            <FormControl isRequired>
              <FormLabel htmlFor="date">Choose date</FormLabel>
              <Input
                id="date"
                type="date"
                min={minDate}
                value={formData.date}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="time">Choose time</FormLabel>
              <Select id="time" value={formData.time} onChange={handleChange}>
                {availableTimes.map((t) => <option key={t} value={t}>{t}</option>)}
              </Select>
            </FormControl>
            <HStack>
              <Button type="button" variant="ghost" onClick={() => setActiveStep(0)}>
                Back
              </Button>
              <Button type="button" colorScheme="yellow" flex={1} onClick={() => setActiveStep(2)}>
                Next: Guests
              </Button>
            </HStack>
          </VStack>
        )}

        {/* PASO 3: INVITADOS Y OCASIÓN (Aquí se usan las variables del error) */}
        {activeStep === 2 && (
          <VStack spacing={5} w="100%" align="stretch">
            <Heading size="sm" color="#495e57">Preferences</Heading>
            
            <FormControl isRequired>
              <FormLabel htmlFor="guests">Number of Guests</FormLabel>
              <NumberInput 
                min={1} 
                max={10} 
                value={formData.guests} 
                onChange={handleGuestChange} // <--- VARIABLE USADA
              >
                <NumberInputField id="guests" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select id="occasion" value={formData.occasion} onChange={handleChange}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>

            <HStack>
              <Button type="button" variant="ghost" onClick={() => setActiveStep(1)}>
                Back
              </Button>
              <Button type="submit" bg="#f4ce14" flex={1}>
                Make Your Reservation
              </Button>
            </HStack>
          </VStack>
        )}

      </VStack>
    </Box>
  );
};

export default BookingForm;