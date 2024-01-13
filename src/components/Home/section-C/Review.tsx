import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import "./review.css";

const Review = () => {
  return (
    <Box
      p={"15px"}
      borderRadius={20}
      borderWidth={"1px"}
      borderColor={useColorModeValue("black", "white")}
      w={"fit-content"}
    >
      <Text
        mb={1}
        ml={2}
        fontSize={"20px"}
        fontFamily={"Merriweather"}
        fontWeight={"bold"}
      >
        Tell us what you think
      </Text>

      <form action="">
        <textarea
          className="review"
          rows={10}
          cols={40}
          placeholder="Write a review"
        />
      </form>
    </Box>
  );
};

export default Review;
