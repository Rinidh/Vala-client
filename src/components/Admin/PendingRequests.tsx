import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AdminInfo } from "./AdminMain";
import usePendingRequests from "../../hooks/usePendingRequests";
import CustomModal from "../CustomModal";
import { AiFillMail } from "react-icons/ai";

const PendingRequests = () => {
  const [modalIsVisible, setModalVisibility] = useState(false);
  const pendingReqs = usePendingRequests();
  const iconSize = useBreakpointValue({ base: "50px", sm: "40px" });

  const numberOfReqs = pendingReqs.length;

  return (
    <Flex justify={"end"} mb={4}>
      <Button
        bg={numberOfReqs === 0 ? "#b8b8ba" : "#e0142f"}
        color={numberOfReqs === 0 ? "black" : "white"}
        fontSize={{ base: 50, md: 30, lg: 15 }}
        px={{ base: 50, md: 30, lg: 15 }}
        py={{ base: 10, md: 6, lg: 5 }}
        _hover={{ bg: numberOfReqs === 0 ? "#cacacc" : "#bf0f27" }}
        onClick={() => setModalVisibility(true)}
      >
        {numberOfReqs === 0
          ? "No requests"
          : numberOfReqs === 1
          ? "1 request"
          : `${numberOfReqs} requests`}
      </Button>

      <CustomModal
        modalIsVisible={modalIsVisible}
        setModalVisibility={() => setModalVisibility(false)}
        key="pending-reqs-modal"
      >
        {pendingReqs.map((req) => (
          <Flex
            key={req._id}
            bg={useColorModeValue("gray.50", "valaBlue.900")}
            borderRadius={20}
            minH={{ base: 200, md: 90, lg: 20 }}
            px={6}
            py={{ base: 4, sm: 0 }}
            mb={"40px"}
            align={"center"}
            direction={{ base: "column", sm: "row" }}
          >
            <Flex direction={"row"} align={"center"} flex={1}>
              <Text
                mr={{ base: 6, md: 4, lg: 2 }}
                fontSize={{ base: 40, sm: 26, lg: 18 }}
                w={{ base: "290px", md: "100px", lg: "100px" }}
                /* by default, word-wrap: word-break is applied to name by <Text> */
              >
                {req.name}
              </Text>
              <Text
                flex={1}
                color={useColorModeValue(
                  "rgba(0,0,0,0.7)",
                  "rgba(255,255,255,0.7)"
                )}
                fontSize={{ base: 32, sm: 20, lg: 15 }}
                wordBreak={"break-all"}
              >
                {req.email}
              </Text>
            </Flex>

            <Flex
              direction={"row"}
              justify={"end"}
              align={"center"}
              w={{ base: "100%", sm: "170px" }}
            >
              <Button
                // fontSize={{ base: 24, md: 24, lg: 15 }}
                variant={"customVariant"}
                px={{ base: 6, md: 4 }}
                py={{ base: 9, md: 6, lg: 3 }}
                mr={2}
              >
                Accept
              </Button>
              <Box
                borderRadius={"17%"}
                p={2}
                _hover={{
                  bg: useColorModeValue(
                    "rgba(0,0,0,0.1)",
                    "rgba(255,255,255,0.1)"
                  ),
                }}
                transition={"all 0.1s linear"}
                onClick={() => setModalVisibility(false)}
              >
                <AiFillMail
                  fontSize={iconSize}
                  color={useColorModeValue("#190257", "#e0dcf5")}
                  onClick={() => console.log(`Mail to: ${req.email}`)}
                />
              </Box>
            </Flex>
          </Flex>
        ))}
        {numberOfReqs === 0 && (
          //to show when list is empty
          <Center h={"100%"}>
            <Heading
              color={useColorModeValue(
                "rgba(0,0,0,0.5)",
                "rgba(255,255,255,0.5)"
              )}
            >
              No Pending Requests
            </Heading>
          </Center>
        )}
      </CustomModal>
    </Flex>
  );
};

export default PendingRequests;
