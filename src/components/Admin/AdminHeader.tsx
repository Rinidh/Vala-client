import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";
import { AdminInfo } from "./AdminMain";

const AdminHeader = ({ adminInfo }: { adminInfo: AdminInfo }) => {
  return (
    <Flex
      bg={useColorModeValue("#e0dcf5", "#190257")}
      borderRadius={20}
      h={{ base: 80, md: 28 }}
      px={8}
      mb={"120px"}
      align={"center"}
      justify={"space-between"}
    >
      <Box>
        <Text
          fontSize={{ base: "30px", md: "13px" }}
          mb={2}
          color={useColorModeValue("rgba(0,0,0,0.7)", "rgba(255,255,255,0.7)")}
        >
          Admin
        </Text>
        <Text fontSize={{ base: "70px", md: "35px" }} fontWeight={"700"}>
          {adminInfo.name}
        </Text>
      </Box>

      <Box>
        <Text
          fontSize={{ base: "30px", md: "13px" }}
          mb={2}
          color={useColorModeValue("rgba(0,0,0,0.7)", "rgba(255,255,255,0.7)")}
        >
          Your ID
        </Text>
        <Text fontSize={{ base: "45px", md: "20px" }} fontWeight={1}>
          {adminInfo._id}
        </Text>
      </Box>
    </Flex>
  );
};

export default AdminHeader;
