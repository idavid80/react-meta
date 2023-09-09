import React, { useState } from "react";
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
} from "@chakra-ui/react";
import * as Yup from "yup";
//import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
//import { useAlertContext } from "../context/alertContext";
import StarRating from "../booking/StarRating";
import "./ContactMeSection.css";
const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  // const { onOpen } = useAlertContext();
  /*   const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const newDate = event.target.value;

    setSelectedDate(newDate);
    //updateTimes(newDate);
  }; */
  const [rating, setRating] = useState(5);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      date: "",
      reason: "birthday",
      comment: "",
      rating: rating,
    },
    onSubmit: (values) => {
      submit("https://localhost/feedback", values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
      rating: Yup.number().required("Required"),
    }),
  });
  /*   useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
      else {console.log("error response")}
    }

  }, [response]);  // eslint-disable-next-line
 */
  return (
/*     <div className="feedback-section"> */
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="feedback-section">
          Your feedback is important to us
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={!!formik.errors.username && formik.touched.username}
              >
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  {...formik.getFieldProps("username")}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
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
              <FormControl
                isInvalid={!!formik.errors.date && formik.touched.date}
              >
                <FormLabel htmlFor="date">Your visit</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.rating && formik.touched.rating}
              >
                <FormLabel htmlFor="rating">Valorate</FormLabel>
                <StarRating rating={rating} setRating={setRating} />
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your comment</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
/*     </div> */
  );
};

export default ContactMeSection;
