import { Flex, useColorModeValue, Box } from "@chakra-ui/react";
import { Fragment, ReactNode, useEffect, useState } from "react";

interface Props {
  modalIsVisible: boolean;
  setModalVisibility: (bool: boolean) => void;
  children: ReactNode;
  name?: string;
}

const CustomModal = ({
  modalIsVisible,
  setModalVisibility,
  children,
  name,
}: Props) => {
  const [isMounted, setIsMounted] = useState(modalIsVisible); //this state hook handles whether the modal is in the DOM, while modalIsVisible handles the opacity. Using only modalIsVisible to handle mounting state doesn't show transitions

  useEffect(() => {
    if (!modalIsVisible) {
      setTimeout(() => {
        setIsMounted(false);
      }, 250); //wait 100 milliseconds after opacity is zero then unmount
    } else {
      setIsMounted(true);
    }
  }, [modalIsVisible]);

  return (
    <>
      {/* if you have the whole returned comp as a conditional render, wrap it in <></> to atleast render empty <></> */}
      {isMounted && (
        <Fragment key={name ? name : "custom-modal"}>
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
                  {children}
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

export default CustomModal;
