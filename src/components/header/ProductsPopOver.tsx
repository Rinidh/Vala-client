// this file will only hold the content of the popover

import { Box, useColorModeValue } from "@chakra-ui/react";

interface Props {
  listItems: string[];
}

const ProductsPopOver = ({ listItems }: Props) => {
  const colors = useColorModeValue(
    { text: "valaBlue.700", back: "valaBlue.50" },
    { text: "valaRed.700", back: "valaBlue.800" }
  );

  return (
    <>
      {listItems.map((item, itemIndex) => (
        <Box
          key={itemIndex}
          w={"100%"}
          px={10}
          py={4}
          bg={colors.back}
          _hover={{ bg: colors.text, color: "white" }}
          transition={"all 0.2s"}
          fontWeight={"bold"}
          cursor={"pointer"}
          zIndex={10} //not working over the blurred cards
        >
          {item}
        </Box>
      ))}
    </>
  );
};

export default ProductsPopOver;
