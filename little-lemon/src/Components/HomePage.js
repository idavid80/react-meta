import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import NavBar from "./nav/NavBar";
import Hero from "./main/Hero";
import Specials from "./main/Specials";
import CustomersSay from "./main/CustomersSay";
import Chicago from "./main/Chicago";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <Flex direction="column" minH="100vh" w="100%">
      
      <Box as="header">
        <NavBar />
      </Box>

      <Box as="main" flex="1" w="100%">
        <Hero />
        <Specials />
        <CustomersSay />
        <Chicago />
      </Box>

      <Box as="footer">
        <Footer />
      </Box>
      
    </Flex>
  );
};

export default HomePage;