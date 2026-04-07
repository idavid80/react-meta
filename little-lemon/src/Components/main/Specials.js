import React from "react";
import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  VStack, 
  HStack 
} from "@chakra-ui/react";

import greekSalad from "../../icons_assets/greek salad.jpg";
import bruchetta from "../../icons_assets/bruchetta.svg";
import lemonDessert from "../../icons_assets/lemon dessert.jpg";

export default function Specials() {
  const specials = [
    {
      title: "Greek salad",
      descriptions: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      prices: 12.99,
      picture: greekSalad,
    },
    {
      title: "Bruchetta",
      descriptions: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      prices: 5.99,
      picture: bruchetta,
    },
    {
      title: "Lemon dessert",
      descriptions: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      prices: 5.0, 
      picture: lemonDessert,
    },
  ];

  return (
    <Flex 
      as="section" 
      id="menu" 
      w="100%" 
      minH="100vh" 
      bg="white" 
      py={{ base: 16, lg: 24 }}
      alignItems="center" 
      justifyContent="center"
    >
      <Box maxW="1000px" mx="auto" px={4} w="100%">
        
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justifyContent="space-between" 
          alignItems="center" 
          mb={12}
        >
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} mb={{ base: 6, md: 0 }}>
            This week specials!
          </Heading>
          <Button 
            bg="#f4ce14" 
            color="black" 
            size="lg" 
            fontWeight="bold" 
            _hover={{ bg: "#e5c00d", transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            Online Menu
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {specials.map((special, i) => (
            
            <Flex 
              key={i} 
              direction="column" 
              bg="#edefee" 
              borderRadius="2xl" 
              overflow="hidden" 
              boxShadow="md" 
              _hover={{ transform: "scale(1.02)", boxShadow: "xl" }} 
              transition="all 0.3s ease"
            >
              <Image 
                src={special.picture} 
                alt={special.title} 
                h="250px" 
                w="100%" 
                objectFit="cover" 
              />
              
              <VStack p={6} alignItems="flex-start" spacing={4} flex="1">
                <Flex w="100%" justifyContent="space-between" alignItems="center">
                  <Heading as="h3" size="md" fontFamily="'Markazi Text', serif" fontSize="2xl">
                    {special.title}
                  </Heading>
                  <Text color="#ee9972" fontWeight="bold" fontSize="lg">
                    ${special.prices.toFixed(2)}
                  </Text>
                </Flex>
                
                <Text color="gray.600" flex="1">
                  {special.descriptions}
                </Text>
                
                <HStack 
                  cursor="pointer" 
                  _hover={{ color: "#495e57" }} 
                  fontWeight="bold" 
                  mt="auto" 
                >
                  <Text>Order a delivery</Text>
                  <Text fontSize="xl">🛵</Text> 
                </HStack>
              </VStack>
            </Flex>
            
          ))}
        </SimpleGrid>
        
      </Box>
    </Flex>
  );
}