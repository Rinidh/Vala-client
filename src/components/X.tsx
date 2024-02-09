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
      <Box position="relative" bg={"darkred"} w={"100%"} minH={"300px"}>
        <Box
          minH={{ base: "400vh", sm: "300vh", lg: "200vh" }}
          bg={useColorModeValue("#ebe9f5", "#0c002b")}
          px={{ base: 10, md: 140 }}
          py={10}
        >
          <PendingRequests />
          <AdminHeader adminInfo={demoAdmin} />
          <AdminBody adminInfo={demoAdmin} />
        </Box>
      </Box>
    </>
  );
};

export default X;
