import {
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure,
  useStatStyles,
} from "@chakra-ui/react";
import BackWall from "../BackWall";
import ProductCard from "../Products/ProductCard";
import ProductModal from "../Products/ProductModal";
import { useState } from "react";
import { products } from "../../data/products";
import placeholder1 from "../../assets/placeholder1.png";

const Offers = () => {
  const [clickedProduct, setClickedProduct] = useState("");
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
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
          {products.map((p, i) => (
            <ProductCard
              name={p.name}
              image={placeholder1}
              onClick={() => setClickedProduct(p.fullName)}
              key={i}
            />
          ))}
        </SimpleGrid>
      </BackWall>

      <ProductModal
        clickedProduct={clickedProduct}
        modalIsVisible={isOpen}
        onCloseModal={onClose}
      />
    </>
  );
};

export default Offers;
