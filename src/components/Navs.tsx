import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import ProductsLink from "./ProductsLink";

const Navs = () => {
  return (
    <HStack
      bg={"darkcyan"}
      minWidth={800}
      px={10}
      justifyContent={"space-between"}
    >
      <ChakraLink
        as={Link} /* as prop connects it to react router */
        to={"/"}
        colorScheme={"valaBlue"}
      >
        Home
      </ChakraLink>
      <ProductsLink />
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
