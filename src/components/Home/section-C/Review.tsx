import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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
          placeholder="Write a review"
          fontSize={{ base: "50px", sm: "35px", lg: "20px" }}
          h={"80%"}
          zIndex={1}
        />
      </FormControl>

      <Flex justify="end" mt={{ base: 5, md: 3 }}>
        <Button
          fontSize={{ base: 50, md: 30, lg: 15 }}
          px={{ base: 50, md: 30, lg: 15 }}
          py={{ base: 10, md: 6, lg: 5 }}
          bg={"valaBlue.500"}
          color={"white"}
        >
          Post
        </Button>
      </Flex>
    </Box>
  );
};

export default Review;
