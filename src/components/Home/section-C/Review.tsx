import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import ReviewModal from "./ReviewModal";
import { useState } from "react";

const Review = () => {
  const [reviewText, setReviewText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); //this state shows if the user has clicked on the 'submit' button or not
  //Only if the user clicks the submit button the reviewText is passed to the ReviewModal (to prevent unnecessary re-renders)

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Box
        p={"15px"}
        borderRadius={20}
        borderWidth={"1px"}
        borderColor={useColorModeValue("black", "white")}
        w={"100%"}
        h={"100%"}
        maxH={500}
      >
        <FormControl h={"80%"}>
          <FormLabel
            mb={1}
            ml={2}
            fontSize={{ base: "50px", sm: "35px", lg: "20px" }}
            fontWeight={"bold"}
          >
            Tell us what you think
          </FormLabel>
          <Textarea
            bg={useColorModeValue("valaBlue.50", "valaBlue.900")}
            resize={"none"}
            placeholder="Write a review"
            fontSize={{ base: "50px", sm: "35px", lg: "20px" }}
            h={"80%"}
            zIndex={1}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </FormControl>

        <Flex justify="end" mt={{ base: 5, md: 3 }}>
          <Button
            // fontSize={{ base: 50, md: 30, lg: 15 }}
            variant={"customVariant"}
            px={{ base: 50, md: 30, lg: 15 }}
            py={{ base: 10, md: 6, lg: 5 }}
            onClick={onOpen}
          >
            Post
          </Button>
        </Flex>
      </Box>

      <ReviewModal
        onCloseModal={onClose}
        modalIsVisible={isOpen}
        reviewText={isSubmitted ? reviewText : ""} //only pass reviewText if 'post' button is clicked
        onSubmit={() => setIsSubmitted(true)}
      />
    </>
  );
};

export default Review;
