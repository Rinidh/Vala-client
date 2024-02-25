import { Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

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
      bg={useColorModeValue("valaBlue.50", "valaBlue.800")}
      mr={10}
      py={{ base: "120px", md: "40px" }}
      _hover={{ bg: useColorModeValue("valaBlue.100", "valaBlue.700") }}
      transition={"all 0.1s linear"}
    >
      <Flex fontSize={"130px"} mb={12} justify={"center"}>
        {icon}
      </Flex>
      <Flex fontSize={{ base: "45px", md: "20px" }} justify={"center"}>
        {text}
      </Flex>
    </Flex>
  );
};

export default ActionButton;
