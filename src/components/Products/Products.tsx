import BackWall from "../BackWall";
import ProductCarousel from "./ProductsCarousel";
import { Heading, Box } from "@chakra-ui/react";

export interface Product {
  name: string;
  image?: string;
  description?: string;
}

const Products = () => {
  const products = [
    { name: "Product 1", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 2", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 12", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 24", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 17", image: 'url("src/assets/placeholder1.png")' },
  ];

  return (
    <BackWall px py>
      <Box mb={{ base: "90px", lg: "45px" }}>
        <Heading size={{ base: "4xl", lg: "xl" }} mb={7} ml={13}>
          Culinary Needs
        </Heading>
        <ProductCarousel products={products} />
      </Box>

      <Box mb={{ base: "90px", lg: "45px" }}>
        <Heading size={{ base: "4xl", lg: "xl" }} mb={7} ml={13}>
          Baking Items
        </Heading>
        <ProductCarousel products={products} />
      </Box>

      <Box mb={{ base: "90px", lg: "45px" }}>
        <Heading size={{ base: "4xl", lg: "xl" }} mb={7} ml={13}>
          Medical Items
        </Heading>
        <ProductCarousel products={products} />
      </Box>

      <Box mb={{ base: "90px", lg: "45px" }}>
        <Heading size={{ base: "4xl", lg: "xl" }} mb={7} ml={13}>
          Salon Supplies
        </Heading>
        <ProductCarousel products={products} />
      </Box>
    </BackWall>
  );
};

export default Products;
