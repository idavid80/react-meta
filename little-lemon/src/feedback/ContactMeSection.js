import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import StarRating from "../booking/StarRating";
import SuccessModal from "../Components/SuccessModal";

const ContactMeSection = () => {
 
  const { isLoading, response, submit } = useSubmit();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      date: "",
      reason: "birthday",
      comment: "",
      rating: 5,
    },
    onSubmit: (values) => {
      submit("https://localhost/feedback", values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.date().required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
      rating: Yup.number().required("Required").min(1, "Please leave a rating"),
    }),
  });

  useEffect(() => {
    if (response && response.type === 'success') {
      onOpen();
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]); 

  return (
    <Box w="100%" bg="#EE9972" py={{ base: 8, md: 16 }} display="flex" justifyContent="center">
      
      <SuccessModal 
        isOpen={isOpen} 
        onClose={onClose} 
        username={formik.values.username} 
      />

      <VStack 
        w="100%" 
        maxW="1024px" 
        p={{ base: 4, md: 8, lg: 12 }} 
        alignItems="flex-start"
      >
        <Heading as="h1" id="feedback-section" color="white" mb={4}>
          Your feedback is important to us
        </Heading>
        
        <Box p={6} rounded="md" w="100%" bg="white" shadow="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={6}>
              <FormControl isInvalid={!!formik.errors.username && formik.touched.username}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  {...formik.getFieldProps("username")}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="reason">Reason</FormLabel>
                <Select
                  id="reason"
                  name="reason"
                  {...formik.getFieldProps("reason")}
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Your visit</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.rating && formik.touched.rating}>
                <FormLabel htmlFor="rating">Valorate</FormLabel>
                <StarRating 
                  rating={formik.values.rating} 
                  setRating={(newRating) => formik.setFieldValue("rating", newRating)} 
                />
                <FormErrorMessage>{formik.errors.rating}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your comment</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={150}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                bg="#f4ce14"
                color="black"
                size="lg"
                width="full"
                isLoading={isLoading}
                _hover={{ bg: "#e5c00d" }}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;