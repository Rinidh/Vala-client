import { Box, Fade, Flex, Show, Spacer, Text } from "@chakra-ui/react";
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

  const linkText = (text: string) => {
    return <Text fontSize={{ md: "xx-large", lg: "medium" }}>{text}</Text>;
  };

  return (
    <Flex
      minWidth={{ base: "450px", sm: "600px", md: "870px", lg: "700px" }}
      justify={"space-between"}
      align={"stretch"}
      position={"relative"}
      mr={{ base: "40px" }}
    >
      <Show above="lg">
        <Flex align="center" cursor={"pointer"} onClick={() => navigate("/")}>
          {linkText("Home")}
        </Flex>
        <Spacer /* Spacer helps to add spacing only where it's applied, the unnecessary space due to the Popover created in the navbar is ignored as there's no spacer btn Products and Popover */
        />

        <Flex
          align={"center"}
          cursor={"pointer"}
          onClick={() => navigate("/products")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {linkText("Products")}
        </Flex>
        <Fade in={isHovered}>
          <Box
            display={isHovered ? "block" : "none"} //to prevent the links from invisibly staying active
            borderRadius={10}
            overflow={"hidden"}
            onMouseLeave={() => setIsHovered(false)}
            onMouseEnter={checkIfHoveredFromLink}
            position={"absolute"}
            top={88}
            left={100}
            zIndex={"tooltip"}
            /* this position is in relation to the relative position at the parent ie ProductsLink */
          >
            <ProductsPopOver
              listItems={[
                "Culinary Needs",
                "Medical Items",
                "Salon Supplies",
                "Baking Items",
              ]}
            />
          </Box>
        </Fade>
        <Spacer />

        <Flex
          /* allowed the linkboxes below to be repetitive coz each design may change over time  */
          align="center"
          cursor={"pointer"}
          onClick={() => navigate("/trending")}
        >
          {linkText("Trending")}
        </Flex>
        <Spacer />

        <Flex
          align="center"
          cursor={"pointer"}
          onClick={() => navigate("/about")}
        >
          {linkText("About")}
        </Flex>
        <Spacer />

        <Flex
          align="center"
          cursor={"pointer"}
          onClick={() => navigate("/login")}
        >
          {linkText("Admin")}
        </Flex>
      </Show>
    </Flex>
  );
};

export default Navs;
