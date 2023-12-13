import { Box, Container } from "@chakra-ui/react";

interface Props {
  isHovered: boolean;
}

const ProductsPopOver = ({ isHovered }: Props) => {
  return (
    <>
      <Box
        bg={"blue"}
        opacity={isHovered ? 1 : 0}
        boxSize={"xs"}
        style={{ position: "absolute", top: "30px", left: "0px" }}
        /* this position is in relation to the relative position at the parent ie ProductsLink */
      >
        CDE
      </Box>
    </>
  );
};

export default ProductsPopOver;
