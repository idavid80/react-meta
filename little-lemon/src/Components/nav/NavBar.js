import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Image,
} from "@chakra-ui/react";
import { HiMenuAlt4 } from "react-icons/hi";
import logo from "../../icons_assets/logo.svg";

const navLinks = [
  { name: "Home", path: "/", isHash: false },
  { name: "Reservation", path: "/booking", isHash: false },
  { name: "Feedback", path: "/feedback", isHash: true },
  { name: "Menu", path: "/#menu", isHash: true },
  { name: "About", path: "/#about", isHash: true },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderLinks = (onClickAction = null) =>
    navLinks.map((link) => {
      const Component = link.isHash ? HashLink : Link;
      return (
        <Box
          key={link.name}
          as={Component}
          to={link.path}
          smooth={link.isHash ? true : undefined}
          onClick={onClickAction}
          color="#495E57"
          fontWeight="600"
          fontSize="xl"
          textTransform="uppercase"
          _hover={{ color: "gray.500", textDecoration: "none" }}
          transition="all 0.3s ease-in-out"
        >
          {link.name}
        </Box>
      );
    });

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      px={{ base: 4, md: 8 }}
      py={4}
      bg="rgba(244, 244, 244, 0.8)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      zIndex="1000"
      fontFamily="'Markazi Text', serif"
    >
      <Flex justifyContent="space-between" alignItems="center" maxW="1200px" mx="auto">
        
        <Box as={Link} to="/">
          <Image src={logo} alt="Little Lemon Logo" h="40px" />
        </Box>

        <HStack as="ul" spacing={8} display={{ base: "none", md: "flex" }}>
          {renderLinks()}
        </HStack>

  
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HiMenuAlt4 size="28px" />}
          variant="ghost"
          color="#495E57"
          aria-label="Open menu"
          onClick={onOpen} // Abre el Drawer
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#EDEFEE">
          <DrawerCloseButton color="#495E57" size="lg" mt={2} />
          <DrawerBody display="flex" alignItems="center" justifyContent="center">
            <VStack spacing={8} mt={10}>
              {renderLinks(onClose)} 
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;