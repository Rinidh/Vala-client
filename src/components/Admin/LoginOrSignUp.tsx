import {
  Box,
  Button,
  Center,
  Flex,
  Show,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import { useAuth } from "../Auth/AuthProvider";
import useDefaultLogin from "../../hooks/useDefaultLogin";

type Operation = "create-account" | "login";

const LoginOrSignUp = () => {
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [operation, setOperation] = useState<Operation>("" as Operation);

  const { errorMessage, failedDefaultLogIn } = useDefaultLogin(); //sometimes, there may be failure but not necessarily an errorMessage
  const { setLoggedInAdmin } = useAuth();

  return (
    <>
      {failedDefaultLogIn && (
        <Box position={"relative"}>
          <Flex
            h={{ base: "200vh", lg: "100vh" }}
            direction={"column"}
            bg={useColorModeValue("gray.50", "valaBlue.900")}
          >
            <Center flex={1} mt={10}>
              <VStack
                w={{ base: 600, lg: 500 }}
                border={{ base: "3px solid", lg: "1px solid" }}
                borderColor={useColorModeValue("valaBlue.800", "white")}
                borderRadius={{ base: 20, lg: 10 }}
                px={{ base: "100px", lg: "40px" }}
                py={{ base: "200px", lg: "100px" }}
              >
                <Button
                  py={{ base: 10, lg: 5 }}
                  mb={{ base: 20, lg: 10 }}
                  border={"4px solid"}
                  borderRadius={{ base: 20, lg: 10 }}
                  w={"100%"}
                  bg={useColorModeValue("white", "valaBlue.900")}
                  transition={"all 0.2s ease-in"}
                  fontSize={{ base: 30, lg: 15 }}
                >
                  Login
                </Button>
                <Button
                  py={{ base: 10, lg: 5 }}
                  w={"100%"}
                  borderRadius={{ base: 20, lg: 10 }}
                  fontSize={{ base: 30, lg: 15 }}
                  bg={useColorModeValue("valaBlue.800", "white")}
                  color={useColorModeValue("white", "valaBlue.800")}
                  transition={"all 0.2s ease-in"}
                  _hover={{ bg: useColorModeValue("valaBlue.700", "gray.100") }}
                  onClick={() => {
                    setOperation("create-account");
                    setModalVisibility(true);
                  }}
                >
                  Create an Account
                </Button>
              </VStack>
            </Center>
            <Show above="md">
              <Box h={"200px"} />
            </Show>
          </Flex>

          <LoginModal
            operation={operation}
            modalIsVisible={modalIsVisible}
            setModalVisibility={() => setModalVisibility(false)}
            onLogin={(adminInfo) => setLoggedInAdmin(adminInfo)}
          />

          {errorMessage && (
            <Box
              bg={useColorModeValue("valaBlue.50", "valaBlue.900")}
              px={30}
              py={10}
              fontSize={{ base: 70, md: 40, lg: 20 }}
              fontWeight={"bold"}
              boxShadow={"0px 6px 20px black"}
              borderRadius={20}
              position={"absolute"}
              top={10}
              left={"20%"}
              right={"20%"}
            >
              {errorMessage}
            </Box>
          )}
        </Box>
      )}
      spinner
    </>
  );
};

export default LoginOrSignUp;
