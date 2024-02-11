import { Box, useColorModeValue } from "@chakra-ui/react";
import { Product } from "../../data/products";

interface Props {
  products: Product[];
}

const SearchPopOver = ({ products }: Props) => {
  const colors = useColorModeValue(
    { _hover: { bg: "valaBlue.400", color: "white" }, bg: "valaBlue.50" },
    { _hover: { bg: "valaBlue.700" }, bg: "valaBlue.800" }
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
          {...colors}
          key={itemIndex}
          w={"100%"}
          px={10}
          py={4}
          transition={"all 0.1s"}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          {`${p.name} - ${p.qtyEachUnit}`}
        </Box>
      ))}
    </Box>
  );
};

export default SearchPopOver;
