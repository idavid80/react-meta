import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  Icon,
  Box
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const SuccessModal = ({ isOpen, onClose, username }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx={4} borderRadius="2xl">
        <ModalHeader textAlign="center" pt={8} color="#495e57">
          ¡Envío Exitoso!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center" py={6}>
          <VStack spacing={4}>
            <Icon as={CheckCircleIcon} w={16} h={16} color="green.500" />
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                ¡Gracias por tu tiempo, {username}!
              </Text>
              <Text color="gray.600" mt={2}>
                Tus comentarios han sido recibidos. Little Lemon crece gracias a clientes como tú.
              </Text>
            </Box>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center" pb={8}>
          <Button 
            bg="#f4ce14" 
            color="black" 
            onClick={onClose}
            _hover={{ bg: "#e5c00d" }}
            size="lg"
            px={10}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;