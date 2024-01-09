import BackWall from "../BackWall";
import SearchInput from "./SearchInput";
import ProductCarousel from "./ProductsCarousel";
import { Heading, Box } from "@chakra-ui/react";
import { products } from "../../demoPdts";

export interface Product {
  name: string;
  image?: string;
  description?: string;
}

const Products = () => {
  return (
    <BackWall px py>
      <SearchInput onSearch={(searchedText) => console.log(searchedText)} />

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
