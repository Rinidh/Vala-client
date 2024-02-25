import SearchInput from "../../Products/SearchInput";
import {
  Box,
  Card,
  Flex,
  useColorModeValue,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const QuickAccess = () => {
  const { colorMode } = useColorMode();

  return (
    <Card
      borderRadius={20}
      border={colorMode === "dark" ? "3px solid" : ""}
      borderColor={"valaBlue.500"}
      h={"100%"}
      overflow={"hidden"}
      bg={useColorModeValue("gray.100", "none")}
    >
      <Flex direction={"column"} zIndex={1} p={5} h={"100%"}>
        <Flex justifyContent={"end"} pr={5}>
          <Text
            fontSize={{ base: 45, md: 35, lg: 16 }}
            border={{ base: "4px solid", md: "2px solid" }}
            p={{ base: 3, lg: 1 }}
            borderRadius={{ base: 20, lg: 10 }}
          >
            Quick Access
          </Text>
        </Flex>

        <Flex justify="center" mt={4} mb={7}>
          <SearchInput
            onSearch={function (searchText: string): void {
              console.log(searchText);
            }}
          />
        </Flex>

        <Flex
          borderRadius={20}
          border={"2px solid"}
          borderColor={"valaBlue.500"}
          flex={1}
          p={3}
        >
          XXXX
        </Flex>
      </Flex>
    </Card>
  );
};

export default QuickAccess;
