import {
  Box,
  Button,
  Center,
  Flex,
  Show,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Admin = () => {
  return (
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
          >
            Create an Account
          </Button>
        </VStack>
      </Center>
      <Show above="md">
        <Box h={"200px"} />
      </Show>
    </Flex>
  );
};

export default Admin;
