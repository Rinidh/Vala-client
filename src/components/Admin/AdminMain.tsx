import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import AdminHeader from "./AdminHeader";
import AdminBody from "./AdminBody";

export interface AdminInfo {
  _id: string;
  name: string;
  email: string;
}

const AdminMain = () => {
  const { currentAdmin } = useAuth();
  const navigate = useNavigate();

  //in case of page refresh
  useEffect(() => {
    if (!currentAdmin.name) {
      navigate("/login"); //if factors eg server connectivity, jwt expiration etc are still okay, /login will direct back to /admin
    }
  }, []);

  return (
    <>
      {currentAdmin.name && (
        <Box
          minH={{ base: "400vh", sm: "300vh", lg: "200vh" }}
          bg={useColorModeValue("#ebe9f5", "#0c002b")}
          px={140}
          py={10}
        >
          <AdminHeader adminInfo={currentAdmin} />
          <AdminBody adminInfo={currentAdmin} />
        </Box>
      )}
    </>
  );
};

export default AdminMain;
