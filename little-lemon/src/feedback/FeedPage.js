import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import NavBar from "../Components/nav/NavBar";
import ContactMeSection from "./ContactMeSection";
import CustomersSay from "../Components/main/CustomersSay";

function FeedPage() {
  return (

    <Flex direction="column" minH="100vh" w="100%">
      <Box as="header">
        <NavBar />
      </Box>
      <Box as="main" flex="1" w="100%">
        <ContactMeSection />
        <CustomersSay />
      </Box>
    </Flex>
  );
}

export default FeedPage;