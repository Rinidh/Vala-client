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
import { apiClient } from "../../services/apiClient";
import { useNavigate } from "react-router-dom";
import { Axios, AxiosError } from "axios";
import { AdminInfo } from "./AdminMain";
import { useAuth } from "../AuthProvider";

type Operation = "create-account" | "login";

const LoginOrSignUp = () => {
  const [triedDefaultLogIn, setTriedDefaultLogIn] = useState(false); //the app first tries to login whenever the user visits admin section; if he's already an authorized admin, he is directly taken to admin page
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [operation, setOperation] = useState<Operation>("" as Operation);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { setLoggedInAdmin } = useAuth();

  useEffect(() => {
    const tryDefaultLogin = async () => {
      try {
        const { data } = await apiClient.post("/api/auth");

        setLoggedInAdmin(data);

        navigate(`/admin`);
      } catch (err) {
        console.log("failed default login: ", err);

        switch (err) {
          case err instanceof AxiosError &&
            err.response?.data == "No token provided...":
            setTriedDefaultLogIn(true);
            break;

          case err instanceof AxiosError &&
            err.response?.data == "You are not yet approved...":
            setMessage("Please wait, you are not yet approved as an admin...");
            break;

          case err instanceof AxiosError &&
            err.response?.data == "Invalid token...":
            setMessage(
              "Please relogin.You may have to relogin after a certain period..."
            );
            setTriedDefaultLogIn(true);
            break;
        }

        setTriedDefaultLogIn(true);
      }
    };

    tryDefaultLogin();
  }, []);

  return (
    <Box>
      {triedDefaultLogIn && (
        <Box position={"relative"}>
          <Flex
            h={{ base: "200vh", lg: "100vh" }}
            direction={"column"}
            bg={useColorModeValue("white", "valaBlue.900")}
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
                  _hover={{ bg: useColorModeValue("valaBlue.600", "gray.100") }}
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

          {message && (
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
              {message}
            </Box>
          )}
        </Box>
      )}
      spinner
    </Box>
  );
};

export default LoginOrSignUp;
