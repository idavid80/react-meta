import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  VStack, 
  Link as ChakraLink 
} from "@chakra-ui/react";

import restaurant from "../../icons_assets/restaurant.jpg";

const Footer = () => {
  return (
    <Box as="footer" id="footer" w="100%" bg="#fbdabb" py={{ base: 12, md: 16 }}>
      <Box maxW="1200px" mx="auto" px={4}>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          
          <Flex justifyContent={{ base: "center", md: "flex-start" }}>
            <Image 
              src={restaurant} 
              alt="Little Lemon Restaurant" 
              borderRadius="xl" 
              objectFit="cover"
              w={{ base: "80%", md: "100%" }}
              h="200px"
              boxShadow="md"
            />
          </Flex>

          <VStack alignItems={{ base: "center", md: "flex-start" }} spacing={3}>
            <Heading as="h4" size="md" color="#495E57" textTransform="uppercase" mb={2}>
              Contact
            </Heading>
            <ChakraLink href="mailto:info@littlelemon.com" fontWeight="500" _hover={{ color: "gray.600" }}>
              Email
            </ChakraLink>
            <ChakraLink href="tel:+3445145874" fontWeight="500" _hover={{ color: "gray.600" }}>
              Phone
            </ChakraLink>
            <ChakraLink href="https://www.google.com/search?q=9249%2BJ7+Sevilla" isExternal fontWeight="500" _hover={{ color: "gray.600" }}>
              Location (Sevilla)
            </ChakraLink>
          </VStack>

          <VStack alignItems={{ base: "center", md: "flex-start" }} spacing={3}>
            <Heading as="h4" size="md" color="#495E57" textTransform="uppercase" mb={2}>
              Navigate
            </Heading>
            <ChakraLink as={HashLink} smooth to="/#home" fontWeight="500" _hover={{ color: "gray.600" }}>
              Home
            </ChakraLink>
            <ChakraLink as={HashLink} smooth to="/#about" fontWeight="500" _hover={{ color: "gray.600" }}>
              About
            </ChakraLink>
            <ChakraLink as={HashLink} smooth to="/#menu" fontWeight="500" _hover={{ color: "gray.600" }}>
              Menu
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/booking" fontWeight="500" _hover={{ color: "gray.600" }}>
              Order online
            </ChakraLink>
          </VStack>

          <VStack alignItems={{ base: "center", md: "flex-start" }} spacing={3}>
            <Heading as="h4" size="md" color="#495E57" textTransform="uppercase" mb={2}>
              Social Media
            </Heading>
            <ChakraLink href="https://www.facebook.com" isExternal fontWeight="500" _hover={{ color: "gray.600" }}>
              Facebook
            </ChakraLink>
            <ChakraLink href="https://www.whatsapp.com" isExternal fontWeight="500" _hover={{ color: "gray.600" }}>
              Whatsapp
            </ChakraLink>
            <ChakraLink href="https://www.instagram.com" isExternal fontWeight="500" _hover={{ color: "gray.600" }}>
              Instagram
            </ChakraLink>
          </VStack>

        </SimpleGrid>

        <Flex justifyContent="center" mt={16} pt={8} borderTop="1px solid rgba(0,0,0,0.1)">
          <Text color="#495E57" fontWeight="bold">
            © {new Date().getFullYear()} Little Lemon. All rights reserved.
          </Text>
        </Flex>

      </Box>
    </Box>
  );
};

export default Footer;