import {
  Image,
  Flex,
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Text,
  VStack,
  HStack,
  Spinner,
  Center,
  Heading,
} from "@chakra-ui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import CreateAccountForm from "./CreateAccountForm";

interface Props {
  operation: "create-account" | "login";
  modalIsVisible: boolean;
  setModalVisibility: (bool: boolean) => void;
}

type ModalDisplayStatus =
  | "a/c-creation-success"
  | "create-account"
  | "login"
  | "error";

const LoginModal = ({
  operation,
  modalIsVisible,
  setModalVisibility,
}: Props) => {
  const [showModal, setShowModal] = useState(modalIsVisible); //this state hook handles whether the modal is in the DOM, while modalIsVisible handles the opacity. Using only modalIsVisible to handle mounting state doesn't show transitions
  const [APIError, setAPIError] = useState("");
  const [modalDisplayStatus, setModalDisplayStatus] =
    useState<ModalDisplayStatus>(operation);

  useEffect(() => {
    if (!modalIsVisible) {
      setTimeout(() => {
        setShowModal(false);
      }, 250); //wait 100 milliseconds after opacity is zero then unmount
    } else {
      setShowModal(true);
      setModalDisplayStatus(operation);
    }
  }, [modalIsVisible, operation]);

  return (
    <>
      {/* if you have the whole returned comp as a conditional render, wrap it in <></> to atleast render empty <></> */}
      {showModal && (
        <Fragment key={"login-modal"}>
          <Flex
            position={"fixed"}
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={modalIsVisible ? 1 : 0}
            transition={"opacity 0.15s linear"}
            zIndex={50}
            //use other libs eg emotion & react-transition-group to create a smooth transition when disappearing instead of complicated code in this component
          >
            <Flex h={"100%"} w={"100%"} bg={"rgba(0,0,0,0.5)"}>
              <Flex flex={1} onClick={() => setModalVisibility(false)} />

              <Flex w={"60%"} minW={300} py={{ base: "70px", md: "40px" }}>
                <Box
                  bg={useColorModeValue("white", "valaBlue.800")}
                  boxSize={"100%"}
                  borderRadius={{ base: 30, lg: 20 }}
                  pt={{ base: 30, md: 15 }}
                  px={20}
                >
                  {modalDisplayStatus === "create-account" && (
                    <CreateAccountForm
                      onAPICallError={(error: string) => {
                        setModalDisplayStatus("error");
                        setAPIError(error);
                      }}
                      onSubmitSuccess={() =>
                        setModalDisplayStatus("a/c-creation-success")
                      }
                    />
                  )}
                  {/* {modalDisplayStatus === "login" && <LoginForm />} */}
                  {modalDisplayStatus === "a/c-creation-success" && (
                    <Center boxSize={"100%"}>
                      <Flex direction={"column"} align={"center"}>
                        <Heading mb={10} size={{ base: "4xl", md: "xl" }}>
                          Your request has been submitted
                        </Heading>
                        <Text mb={5} fontSize={{ base: "30px", md: "20px" }}>
                          Please wait until you are approved by other admins
                        </Text>
                        <Text fontSize={{ base: "30px", md: "20px" }}>
                          You will recieve a confirmation email
                        </Text>
                      </Flex>
                    </Center>
                  )}
                  {modalDisplayStatus === "error" && (
                    <Center boxSize={"100%"}>
                      <Heading>{APIError}</Heading>
                    </Center>
                  )}
                </Box>
              </Flex>

              <Flex flex={1} onClick={() => setModalVisibility(false)} />
            </Flex>
          </Flex>
        </Fragment>
      )}
    </>
  );
};

export default LoginModal;
