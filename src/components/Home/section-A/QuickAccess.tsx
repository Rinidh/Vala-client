import SearchInput from "../../Products/SearchInput";
import { Box, Card, Flex, useColorModeValue, Text } from "@chakra-ui/react";

const QuickAccess = () => {
  const bg = useColorModeValue("rgba(255,255,255,0.2)", "rgba(0,0,0,0.2)");

  return (
    <Card
      borderRadius={20}
      h={"100%"}
      overflow={"hidden"}
      bg={"transparent"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        backdropFilter={"blur(25px)"}
        height={"100%"}
        w={"100%"}
        bg={bg}
      />

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

        <Flex borderRadius={20} border={"2px solid blue"} flex={1} p={3}>
          XXXX
        </Flex>
      </Flex>
    </Card>
  );
};

export default QuickAccess;
