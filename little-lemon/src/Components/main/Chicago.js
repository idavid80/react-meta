import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Button, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import imageA from "../../icons_assets/Mario and Adrian A.jpg";
import imageB from "../../icons_assets/Mario and Adrian b.jpg";

export default function Chicago() {
  return (
    <Flex
      id="about"
      w="100%"
      minH="100vh"
      bg="#333333"
      direction={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
      p={{ base: 6, md: 12, lg: 24 }}
    >
      
      <VStack
        w={{ base: "100%", lg: "50%" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        color="white"
        spacing={4}
        maxW="600px"
      >
        <Box>
          <Heading as="h1" color="#f4ce14" fontSize={{ base: "4xl", md: "6xl" }}>
            Little Lemon
          </Heading>
          <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="normal">
            Chicago
          </Heading>
        </Box>

        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist. Meditwist Family
          Restaurant is a beloved family-owned establishment that specializes
          in serving Mediterranean cuisine with a contemporary twist. Located
          in a bustling city, Meditwist provides a unique dining experience by
          infusing traditional recipes with modern techniques and flavors.
        </Text>

        <Button
          as={ReactRouterLink}
          to="/restaurant"
          bg="#f4ce14"
          color="black"
          size="lg"
          mt={4}
          fontWeight="bold"
          _hover={{ bg: "#e5c00d", transform: "scale(1.05)" }}
          transition="all 0.2s"
          aria-label="Read more about our Chicago restaurant"
        >
          Show more
        </Button>
      </VStack>

      <VStack 
        w={{ base: "100%", lg: "40%" }} 
        mt={{ base: 12, lg: 0 }}
        spacing={0}
        position="relative"
      >
        <Image
          src={imageA}
          alt="Chefs Mario and Adrian cooking"
          w={{ base: "80%", md: "60%" }}
          borderRadius="md"
          boxShadow="2xl"
          alignSelf="flex-end"
          zIndex="2"
        />
        <Image
          src={imageB}
          alt="Chefs Mario and Adrian laughing"
          w={{ base: "80%", md: "60%" }}
          borderRadius="md"
          boxShadow="2xl"
          alignSelf="flex-start"
          mt={{ base: "-10%", md: "-20%" }}
          zIndex="1"
        />
      </VStack>
      
    </Flex>
  );
}