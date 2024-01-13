import { Box, Flex } from "@chakra-ui/react";
import useFadeOnScroll from "../../../hooks/useFadeOnScroll";

const FadeInBoxes = ({}) => {
  const { refs, setChildProps } = useFadeOnScroll();
  const [ref1, ref2] = refs;

  return (
    <Box p={30} bg={"green"}>
      <Flex justify={"start"} ref={ref1}>
        <Box
          bg={"tomato"}
          h={500}
          w={500}
          transition={"all ease-in 0.3s"}
          {...setChildProps(1)}
        >
          Child1
        </Box>
      </Flex>

      <Flex justify={"end"} ref={ref2}>
        <Box
          bg={"tomato"}
          h={500}
          w={500}
          transition={"all ease-in 0.3s"}
          {...setChildProps(2)}
        >
          Child2
        </Box>
      </Flex>
    </Box>
  );
};

export default FadeInBoxes;
