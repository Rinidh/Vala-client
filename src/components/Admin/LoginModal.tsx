import { Flex, Text, Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
import LoginForm from "./LoginForm";
import { AdminInfo } from "./AdminMain";
import CustomModal from "../CustomModal";

interface Props {
  operation: "create-account" | "login";
  modalIsVisible: boolean;
  onCloseModal: () => void;
  onLogin: (adminInfo: AdminInfo) => void;
}

type ModalDisplayStatus =
  | "a/c-creation-success"
  | "create-account"
  | "login"
  | "error";

const LoginModal = ({
  operation,
  modalIsVisible,
  onLogin,
  onCloseModal,
}: Props) => {
  const [APIError, setAPIError] = useState("");
  const [modalDisplayStatus, setModalDisplayStatus] =
    useState<ModalDisplayStatus>(operation);

  useEffect(() => {
    if (modalIsVisible) setModalDisplayStatus(operation);
  }, [modalIsVisible, operation]);

  return (
    <CustomModal
      modalIsVisible={modalIsVisible}
      onCloseModal={onCloseModal}
      key="login-modal"
    >
      {modalDisplayStatus === "create-account" && (
        <CreateAccountForm
          onAPICallError={(error: string) => {
            setModalDisplayStatus("error");
            setAPIError(error);
          }}
          onSubmitSuccess={(adminInfo) => {
            setModalDisplayStatus("a/c-creation-success");
            onLogin(adminInfo);
          }}
        />
      )}
      {modalDisplayStatus === "login" && <LoginForm />}
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
          <Heading>{`Server error: ${APIError}`}</Heading>
        </Center>
      )}
    </CustomModal>
  );
};

export default LoginModal;
