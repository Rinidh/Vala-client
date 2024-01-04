// this file will only hold the content of the popover

import { Box } from "@chakra-ui/react";

interface Props {
  listItems: string[];
}

const ProductsPopOver = ({ listItems }: Props) => {
  return (
    <>
      {listItems.map((item) => (
        <Box w={"100%"} h={10} _hover={{ bg: "valaBlue.700", color: "white" }}>
          {item}
        </Box>
      ))}
    </>
  );
};

export default ProductsPopOver;
