import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Navs = () => {
  return (
    <HStack
      bg={"darkcyan"}
      minWidth={800}
      px={10}
      justifyContent={"space-between"}
    >
      <ChakraLink as={Link} to={"/x"} colorScheme={"valaBlue"}>
        Products
      </ChakraLink>
      <ChakraLink as={Link} to={"/y"} colorScheme={"valaBlue"}>
        Contacts
      </ChakraLink>
      <ChakraLink as={Link} to={"/x"} colorScheme={"valaBlue"}>
        FAQs
      </ChakraLink>
      <ChakraLink as={Link} to={"/y"} colorScheme={"valaBlue"}>
        About
      </ChakraLink>
    </HStack>
  );
};

export default Navs;
