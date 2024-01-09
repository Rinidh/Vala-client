import { Box, useColorModeValue } from "@chakra-ui/react";
import { Product } from "./Products";

interface Props {
  products: Product[];
}

const SearchPopOver = ({ products }: Props) => {
  const colors = useColorModeValue(
    { text: "valaBlue.700", back: "valaBlue.50" },
    { text: "valaRed.700", back: "valaBlue.800" }
  );

  return (
    <Box w={400} mt={2} borderRadius={10} overflow={"hidden"}>
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
