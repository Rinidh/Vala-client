import { Box, useColorModeValue } from "@chakra-ui/react";
import { Product } from "../../data/products";

interface Props {
  products: Product[];
}

const SearchPopOver = ({ products }: Props) => {
  const colors = useColorModeValue(
    { text: "valaBlue.700", back: "valaBlue.50" },
    { text: "valaRed.700", back: "valaBlue.800" }
  );

  return (
    <Box
      w={400}
      borderRadius={10}
      overflow={"hidden"}
      position={"absolute"}
      top={12}
      zIndex={10}
    >
      {products.map((p, itemIndex) => (
        <Box
          key={itemIndex}
          w={"100%"}
          px={10}
          py={4}
          bg={colors.back}
          _hover={{ bg: colors.text, color: "white" }}
          transition={"all 0.1s"}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          {p.name}
        </Box>
      ))}
    </Box>
  );
};

export default SearchPopOver;
