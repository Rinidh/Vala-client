import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import SearchInput from "./Products/SearchInput";
import AdminMain from "./Admin/AdminMain";
import AdminHeader from "./Admin/AdminHeader";
import AdminBody from "./Admin/AdminBody";
import PendingRequests from "./Admin/PendingRequests";

const X = () => {
  const demoAdmin = { name: "Name", email: "mail@abcd", _id: "1234567890" };

  return (
    <>
      <Container bg={"orange"} h={40} w={40} children="X" />
      <Box position="relative" bg={"darkred"} w={"100%"} minH={"300px"}></Box>
    </>
  );
};

export default X;
