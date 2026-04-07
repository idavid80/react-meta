import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Text, 
  SimpleGrid, 
  Avatar, 
  VStack, 
  HStack, 
  Icon 
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

import carmen from "../../images/carmen";
import paul from "../../images/paul";
import chan from "../../images/chan";
import jane from "../../images/jane";

const CustomersSay = () => {
  const customers = [
    {
      name: "Carmen",
      comment: "A lovely little restaurant with a great atmosphere.",
      rating: 4,
      picture: carmen,
    },
    {
      name: "Chan",
      comment: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      rating: 5,
      picture: chan,
    },
    {
      name: "Jane",
      comment: "The Lemon dessert is absolutely fantastic! Refreshing and perfectly sweet.",
      rating: 3,
      picture: jane,
    },
    {
      name: "Paul",
      comment: "Great mediterranean restaurant! Will definitely come back.",
      rating: 5,
      picture: paul,
    },
  ];

  return (
    <Flex 
      id="feedback" 
      as="section" 
      w="100%" 
      minH="100vh" 
      bg="#ee9972" 
      py={{ base: 12, lg: 24 }}
      direction="column"
      justifyContent="center"
    >
      <Box maxW="1200px" mx="auto" px={4} w="100%">
        
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={12}
        >
          <Heading as="h2" color="white" mb={{ base: 6, md: 0 }} textAlign="center">
            What our customers say
          </Heading>
          
          <Button
            as={ReactRouterLink}
            to="/feedback"
            bg="#f4ce14"
            color="black"
            size="lg"
            fontWeight="bold"
            _hover={{ bg: "#e5c00d", transform: "scale(1.05)" }}
            transition="all 0.2s"
          >
            Leave Feedback
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {customers.map((customer, i) => (
            <VStack
              key={i}
              bg="#d6c1b7"
              p={6}
              borderRadius="2xl"
              boxShadow="lg"
              alignItems="flex-start"
              justifyContent="space-between"
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              transition="all 0.3s ease"
              h="100%"
            >
              
              <HStack spacing={4}>
                <Avatar src={customer.picture} name={customer.name} size="lg" />
                <Heading as="h3" size="md" color="#333333">
                  {customer.name}
                </Heading>
              </HStack>

              <Text color="gray.800" mt={4} fontStyle="italic" flex="1">
                "{customer.comment}"
              </Text>

              <HStack spacing={1} mt={4}>
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <Icon
                      key={index}
                      as={AiFillStar}
                      color={customer.rating > index ? "#f4ce14" : "gray.500"}
                      boxSize={5}
                    />
                  ))}
              </HStack>
              
            </VStack>
          ))}
        </SimpleGrid>
        
      </Box>
    </Flex>
  );
};

export default CustomersSay;