import { Box, Fade, Flex, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductsPopOver from "./ProductsPopOver";

const Navs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const checkIfHoveredFromLink = () => {
    if (isHovered === true) {
      // if the cursor hovered down from the Flex with the products link, then show the popover
      // this approach works when the popover is positioned slighltly over the Flex with the products link
      setIsHovered(true);
    }
  };

  return (
    <Flex
      minWidth={800}
      justify={"space-between"}
      align={"stretch"}
      position={"relative"}
    >
      <Flex align="center" cursor={"pointer"} onClick={() => navigate("/")}>
        <Text fontSize={{ sm: "md", md: "xl" }}>Home</Text>
      </Flex>
      <Spacer /* Spacer helps to add spacing only where it's applied, the unnecessary space due to the Popover created in the navbar is ignored as there's no spacer btn Products and Popover */
      />

      <Flex
        align={"center"}
        cursor={"pointer"}
        onClick={() => navigate("/x")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>Products</Text>
      </Flex>
      <Fade in={isHovered}>
        <Box
          bg={"gray.100"}
          boxSize={"xs"}
          onMouseLeave={() => setIsHovered(false)}
          onMouseEnter={checkIfHoveredFromLink}
          position={"absolute"}
          top={"98px"}
          left={100}
          zIndex={100}
          /* this position is in relation to the relative position at the parent ie ProductsLink */
        >
          <ProductsPopOver />
        </Box>
      </Fade>
      <Spacer />

      <Flex
        /* allowed the linkboxes below to be repetitive coz each design may change over time  */
        align="center"
        cursor={"pointer"}
        onClick={() => navigate("/y")}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>Trending</Text>
      </Flex>
      <Spacer />

      <Flex
        align="center"
        cursor={"pointer"}
        onClick={() => navigate("/about")}
      >
        <Text fontSize={{ sm: "md", md: "xl" }}>About</Text>
      </Flex>
      <Spacer />

      <Flex align="center" cursor={"pointer"} onClick={() => navigate("/x")}>
        <Text fontSize={{ sm: "md", md: "xl" }}>XXXX</Text>
      </Flex>
    </Flex>
  );
};

export default Navs;
