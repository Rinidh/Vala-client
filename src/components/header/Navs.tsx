import { Box, Fade, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";
import ProductsPopOver from "./ProductsPopOver";

const Navs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const checkIfHoveredFromLink = () => {
    if (isHovered === true) {
      // if the cursor hovered down from the Flex with the products link, then show the popover
      // this approach works when the popover is positioned slighltly over the Flex with the products link
      setIsHovered(true);
    }
  };

  return (
    <Flex
      bg={"darkcyan"}
      minWidth={800}
      justify={"space-between"}
      align={"stretch"}
      position={"relative"}
    >
      <Flex
        bg={"tomato"}
        align={"center"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ChakraLink as={Link} to={"/x"} colorScheme={"valaBlue"}>
          Products
        </ChakraLink>
      </Flex>
      <Fade in={isHovered}>
        <Box
          bg={"blue"}
          boxSize={"xs"}
          onMouseLeave={() => setIsHovered(false)}
          onMouseEnter={checkIfHoveredFromLink}
          style={{ position: "absolute", top: "95px", left: "0px" }}
          /* this position is in relation to the relative position at the parent ie ProductsLink */
        >
          <ProductsPopOver />
        </Box>
      </Fade>

      <ChakraLink
        as={Link} /* as prop connects it to react router */
        to={"/"}
        colorScheme={"valaBlue"}
      >
        Home
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
    </Flex>
  );
};

export default Navs;
