import { Flex, useColorModeValue, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface Props {
  icon: ReactNode;
  text: string;
}

const ActionButton = ({ icon, text }: Props) => {
  return (
    <Flex
      direction={"column"}
      justify={"space-between"}
      boxSize={"100%"}
      borderRadius={20}
      bg={useColorModeValue("#e0dcf5", "#190257")}
      mr={10}
      py={10}
      _hover={{ bg: useColorModeValue("#d4cef5", "#210273") }}
      transition={"all 0.1s linear"}
    >
      <Flex fontSize={"130px"} mb={12} justify={"center"}>
        {icon}
      </Flex>
      <Flex fontSize={"20px"} justify={"center"}>
        {text}
      </Flex>
    </Flex>
  );
};

export default ActionButton;
