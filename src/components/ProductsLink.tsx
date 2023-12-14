import { Box, Link as ChakraLink, Fade } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProductsPopOver from "./ProductsPopOver";
import { useState } from "react";

const ProductsLink = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position={"relative"}
      /* relative for ProdcutsPopOver*/
      bg={"yellowgreen"}
    >
      <ChakraLink
        as={Link}
        to={"/x"}
        colorScheme={"valaBlue"}
        onMouseEnter={() => setIsHovered(true)} //set only the mouse-enter prop
      >
        Products
      </ChakraLink>

      <Fade in={isHovered}>
        <Box
          bg={"blue"}
          boxSize={"xs"}
          onMouseLeave={() => setIsHovered(false)} //set only the mouse-leave prop
          style={{ position: "absolute", top: "30px", left: "0px" }}
          /* this position is in relation to the relative position at the parent ie ProductsLink */
        >
          <ProductsPopOver />
        </Box>
      </Fade>
    </Box>
  );
};

export default ProductsLink;
