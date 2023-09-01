import React from "react";
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

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
 // const { onOpen } = useAlertContext();
/*   const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const newDate = event.target.value;

    setSelectedDate(newDate);
    //updateTimes(newDate);
  }; */

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      date: "",
      type: "birthday",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://marca.com", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
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
    <div
/*       isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8} */
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
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
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">
                  Anniversary
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.date && formik.touched.date}
              >
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
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
    </div>
  );
};

export default ContactMeSection;