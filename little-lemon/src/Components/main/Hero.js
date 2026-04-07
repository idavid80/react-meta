import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Button, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import image from "../../icons_assets/restauranfood.jpg";

export default function Hero() {
  return (
    <Flex 
      as="section" 
      id="home" 
      bg="#495e57" 
      w="100%" 
      minH="100vh" 
      alignItems="center" 
      pt={{ base: 24, md: 32 }} 
      pb={{ base: 12, md: 16 }}
    >
      <Flex
        maxW="1000px" 
        w="100%"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        
        <VStack
          w={{ base: "100%", md: "50%" }}
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          spacing={4}
          mb={{ base: 12, md: 0 }}
        >
          <Box>
            <Heading as="h1" color="#f4ce14" fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}>
              Little Lemon
            </Heading>
            <Heading as="h2" color="white" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="normal" mt={-2}>
              Chicago
            </Heading>
          </Box>

          <Text color="white" fontSize={{ base: "md", md: "xl" }} maxW="400px" lineHeight="1.6">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>

          <Button
            as={ReactRouterLink}
            to="/booking"
            bg="#f4ce14"
            color="black"
            size="lg"
            mt={4}
            fontWeight="bold"
            _hover={{ bg: "#e5c00d", transform: "scale(1.05)" }}
            transition="all 0.2s"
            aria-label="Reserve a table"
          >
            Reserve a table
          </Button>
        </VStack>

        <Box 
          w={{ base: "100%", md: "40%" }} 
          display="flex" 
          justifyContent={{ base: "center", md: "flex-end" }}
        >
          <Image
            src={image}
            alt="Delicious Mediterranean food"
            w={{ base: "80%", md: "350px" }}
            h={{ base: "auto", md: "420px" }} 
            objectFit="cover" 
            borderRadius="2xl" 
            boxShadow="2xl" 
          />
        </Box>
        
      </Flex>
    </Flex>
  );
}