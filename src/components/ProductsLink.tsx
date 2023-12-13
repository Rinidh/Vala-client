import { Box, Link as ChakraLink } from "@chakra-ui/react";
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Products
      </ChakraLink>

      <ProductsPopOver isHovered={isHovered} />
    </Box>
  );
};

export default ProductsLink;
