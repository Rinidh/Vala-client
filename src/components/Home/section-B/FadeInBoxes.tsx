import { Box, Flex } from "@chakra-ui/react";
import useFadeOnScroll from "../../../hooks/useFadeOnScroll";
import ProductsBrief from "./ProductsBrief";
import AboutBrief from "./AboutBrief";

const FadeInBoxes = ({}) => {
  const { refs, setChildPosition } = useFadeOnScroll();
  const [ref1, ref2] = refs;

  return (
    <Box p={30} mb={40}>
      <Flex justify={"start"} ref={ref1} mb={40}>
        <Box
          // bg={"tomato"}
          minH={500}
          w={{ base: 1200, md: 900, lg: 700 }}
          transition={"all ease-in 0.6s"}
          {...setChildPosition(1)}
        >
          <ProductsBrief />
        </Box>
      </Flex>

      <Flex justify={"end"} ref={ref2}>
        <Box
          // bg={"tomato"}
          minH={500}
          w={{ base: 1200, md: 900, lg: 700 }}
          transition={"all ease-in 0.6s"}
          {...setChildPosition(2)}
        >
          <AboutBrief />
        </Box>
      </Flex>
    </Box>
  );
};

export default FadeInBoxes;
