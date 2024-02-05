import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import SearchInput from "./Products/SearchInput";

const X = () => {
  return (
    <>
      <Container bg={"orange"} h={40} w={40} children="X" />
      <Box position="relative" bg={"darkred"} w={"100%"} h={"300px"}></Box>
    </>
  );
};

export default X;
