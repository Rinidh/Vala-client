import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import BackWall from "../BackWall";
import ProductCard from "../Products/ProductCard";

const Offers = () => {
  return (
    <BackWall px py>
      <Flex justify={"center"} h={100} mt={100} mb={6}>
        <Heading fontSize={"xxx-large"} fontFamily={"Merriweather"}>
          Your favourite products at your favourite costs
        </Heading>
      </Flex>
      <hr style={{ border: "3px solid", marginBottom: "60px" }} />

      <SimpleGrid
        columns={{ base: 1, sm: 3, lg: 5 }}
        spacingX={3}
        spacingY={200}
      >
        <ProductCard name="name" discountPercentage="10" />
        <ProductCard name="name" discountPercentage="30" />
        <ProductCard name="name" discountPercentage="15" />
        <ProductCard name="name" discountPercentage="14" />
      </SimpleGrid>
    </BackWall>
  );
};

export default Offers;
