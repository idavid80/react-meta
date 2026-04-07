import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import chef from "../../icons_assets/restaurant chef B.jpg";

const Restaurant = () => {
  return (
    <VStack
      minH="100vh"
      w="100%"
      bg="#EFEFEF"
      justifyContent="center"
      p={{ base: 6, md: 12 }}
      spacing={6}
    >
      <Heading as="h1" color="#495E57" textAlign="center">
        Little Lemon
      </Heading>

      <Image
        src={chef}
        alt="Nuestros chefs en el restaurante de Chicago"
        borderRadius="md" 
        boxShadow="lg"
        w={{ base: "100%", md: "60%", lg: "500px" }}
        maxH="400px"
        objectFit="cover"
      />

      <Text 
        fontSize={{ base: "md", md: "lg" }} 
        textAlign="center" 
        maxW="600px"
        color="gray.700"
      >
        Description about our chef and Chicago restaurant. We serve the most authentic 
        Mediterranean cuisine crafted with passion.
      </Text>

      <Button
        as={ReactRouterLink}
        to="/"
        bg="#f4ce14"
        color="black"
        size="lg"
        fontWeight="bold"
        _hover={{ bg: "#e5c00d", transform: "scale(1.05)" }}
        transition="all 0.2s"
        aria-label="Back to home page"
      >
        Back
      </Button>
      
    </VStack>
  );
};

export default Restaurant;