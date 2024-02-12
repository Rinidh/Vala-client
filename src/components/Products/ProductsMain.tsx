import BackWall from "../BackWall";
import SearchInput from "./SearchInput";
import ProductCarousel from "./ProductsCarousel";
import { Heading, Box, Flex, useDisclosure } from "@chakra-ui/react";
import { demoProducts } from "../../demoPdts";
import BackToTop from "../BackToTop";
import ProductModal from "./ProductModal";
import { Fragment, useState } from "react";
import { Product, products } from "../../data/products";

export interface ProductBrief {
  name: string;
  image?: string;
  description?: string;
}

const Products = () => {
  const [clickedProduct, setClickedProduct] = useState<string>("");

  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleProductClick = (fullName: string) => {
    setClickedProduct(fullName);
    onOpen();
  };

  return (
    <>
      <BackWall px py>
        <Flex justify="end">
          <SearchInput onSearch={(searchedText) => console.log(searchedText)} />
        </Flex>

        <Box h={100} /* for tempoaray spacing */ />

        <Box mb={{ base: "90px", lg: "45px" }}>
          <Heading
            id="culinary-needs"
            size={{ base: "4xl", lg: "xl" }}
            mb={7}
            ml={13}
          >
            Culinary Needs
          </Heading>
          <ProductCarousel
            products={products}
            onClickProductCard={(fullName) => handleProductClick(fullName)}
          />
        </Box>

        <Box mb={{ base: "90px", lg: "45px" }}>
          <Heading
            id="baking-items"
            size={{ base: "4xl", lg: "xl" }}
            mb={7}
            ml={13}
          >
            Baking Items
          </Heading>
          <ProductCarousel
            products={products}
            onClickProductCard={(fullName) => handleProductClick(fullName)}
          />
        </Box>

        <Box mb={{ base: "90px", lg: "45px" }}>
          <Heading
            id="medical-items"
            size={{ base: "4xl", lg: "xl" }}
            mb={7}
            ml={13}
          >
            Medical Items
          </Heading>
          <ProductCarousel
            products={products}
            onClickProductCard={(fullName) => handleProductClick(fullName)}
          />
        </Box>

        <Box mb={{ base: "90px", lg: "45px" }}>
          <Heading
            id="salon-supplies"
            size={{ base: "4xl", lg: "xl" }}
            mb={7}
            ml={13}
          >
            Salon Supplies
          </Heading>
          <ProductCarousel
            products={products}
            onClickProductCard={(fullName) => handleProductClick(fullName)}
          />
        </Box>
      </BackWall>

      <ProductModal
        clickedProduct={clickedProduct}
        modalIsVisible={isOpen}
        onCloseModal={onClose}
      />

      <BackToTop />
    </>
  );
};

export default Products;
