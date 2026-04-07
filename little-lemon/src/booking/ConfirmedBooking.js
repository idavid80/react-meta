import React from "react";
import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Icon, 
  Button, 
  Container 
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Navbar from "../Components/nav/NavBar";

const ConfirmedBooking = () => {
  const bookingDataRaw = localStorage.getItem("booking_data");
  const bookingData = bookingDataRaw ? JSON.parse(bookingDataRaw) : {};

  const { 
    name = "Customer", 
    guests = 0, 
    date = "TBD", 
    time = "TBD" 
  } = bookingData;

  return (
    <Box minH="100vh" bg="#F4F4F4">
      <Navbar />
      
      <Container maxW="container.md" pt={{ base: "40%", md: "15%" }}>
        <VStack 
          bg="white" 
          p={{ base: 8, md: 12 }} 
          borderRadius="2xl" 
          boxShadow="2xl" 
          spacing={6} 
          textAlign="center"
        >
          <Icon as={CheckCircleIcon} w={20} h={20} color="#495e57" />
          
          <VStack spacing={2}>
            <Heading as="h2" size="xl" color="#495e57">
              Booking Confirmed!
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Thank you for choosing Little Lemon, {name}.
            </Text>
          </VStack>

          <Box 
            py={4} 
            px={8} 
            bg="#EDEFEE" 
            borderRadius="lg" 
            w="100%"
          >
            <Text fontWeight="bold" color="#495e57">Reservation Details:</Text>
            <Text fontSize="md">
              {guests} guests • {date} at {time}
            </Text>
          </Box>

          <Text color="gray.500" fontSize="sm">
            A confirmation email has been sent to your inbox. 
            We look forward to seeing you!
          </Text>

          <Button
            as={ReactRouterLink}
            to="/"
            bg="#f4ce14"
            color="black"
            size="lg"
            px={10}
            _hover={{ bg: "#e5c00d" }}
          >
            Back to Home
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default ConfirmedBooking;