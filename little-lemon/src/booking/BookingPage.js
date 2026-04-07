import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  VStack, 
  Container,
  useSteps
} from '@chakra-ui/react';
import BookingForm from './BookingForm'; 
import NavBar from '../Components/nav/NavBar';
import StepProcess from './StepProcess';

const steps = [
  { title: 'Step 1', description: 'Contact' },
  { title: 'Step 2', description: 'Date & Time' },
  { title: 'Step 3', description: 'Guests' },
];

function BookingPage() {
  const navigate = useNavigate();
  

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const submitForm = async (formData) => {
    let response = true; 
    try {
      if (response === true) {
        navigate('/booking-confirmed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Flex direction="column" minH="100vh" bg="#F4F4F4" pt={{ base: 20, md: 28 }} pb={12}>
      <Box as="header">
        <NavBar />
      </Box>

      <Container maxW="container.lg">
        <VStack spacing={10}>

          <VStack spacing={2} textAlign="center">
            <Heading as="h1" color="#495e57" fontSize={{ base: "3xl", md: "5xl" }}>
              {activeStep === 2 ? "Finalize Reservation" : "Reserve a Table"}
            </Heading>
            <Text color="gray.600" fontSize="lg">
              {steps[activeStep].description} - Step {activeStep + 1} of 3
            </Text>
          </VStack>

          <Box w="100%" bg="white" p={6} borderRadius="xl" boxShadow="md">
            <StepProcess activeStep={activeStep} setActiveStep={setActiveStep} />
          </Box>

          <Box 
            w="100%" 
            maxW="600px" 
            bg="white" 
            p={{ base: 6, md: 10 }} 
            borderRadius="xl" 
            boxShadow="2xl"
          >

            <BookingForm 
              submitForm={submitForm} 
              activeStep={activeStep} 
              setActiveStep={setActiveStep} 
            />
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
}

export default BookingPage;