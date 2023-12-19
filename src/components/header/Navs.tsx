import { Box, Fade, Flex, Spacer, Text } from "@chakra-ui/react";
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
        align="center"
        bg={"tomato"}
        cursor={"pointer"}
        onClick={() => console.log("Home")}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>Home</Text>
      </Flex>
      <Spacer /* Spacer helps to add spacing only where it's applied, the unnecessary space due to the Popover created in the navbar is ignored as there's no spacer btn Products and Popover */
      />

      <Flex
        bg={"tomato"}
        align={"center"}
        cursor={"pointer"}
        onClick={() => console.log("Home")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>Products</Text>
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
      <Spacer />

      <Flex
        align="center"
        bg={"tomato"}
        cursor={"pointer"}
        onClick={() => console.log("Customer Care")}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>Customer Care</Text>
      </Flex>
      <Spacer />

      <Flex
        align="center"
        bg={"tomato"}
        cursor={"pointer"}
        onClick={() => console.log("Blog")}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>Blog</Text>
      </Flex>
      <Spacer />

      <Flex
        align="center"
        bg={"tomato"}
        cursor={"pointer"}
        onClick={() => console.log("About")}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>About</Text>
      </Flex>
    </Flex>
  );
};

export default Navs;
