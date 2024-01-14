import {
  Box,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

const Review = () => {
  return (
    <Box
      p={"15px"}
      borderRadius={20}
      borderWidth={"1px"}
      borderColor={useColorModeValue("black", "white")}
      w={"100%"}
      h={"100%"}
      maxH={500}
    >
      <FormControl h={"100%"}>
        <FormLabel mb={1} ml={2} fontSize={"20px"} fontWeight={"bold"}>
          Tell us what you think
        </FormLabel>
        <Textarea
          bg={useColorModeValue("valaBlue.50", "valaBlue.900")}
          placeholder="Write a review"
          h={"85%"}
          zIndex={1}
        />
      </FormControl>
    </Box>
  );
};

export default Review;
