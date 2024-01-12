import { Box, Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import QuickAccess from "./QuickAccess";
import DynamicText from "./DynamicText";
import { useRef, useState } from "react";
import useFadeOnScroll from "../../hooks/useFadeOnScroll";

const Home = () => {
  const { colorMode } = useColorMode();
  const { refs, setChildProps } = useFadeOnScroll();
  const [ref1, ref2] = refs;

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall1-dark.png')"
      : "url('src/assets/wall1-light.png')";

  return (
    <>
      <Box
        bgImage={backWallUrl} /* dark mode blue behind is #140045 */
        w={{ base: "338vw", sm: "200vw", lg: "100vw" }}
        minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
        paddingLeft={{ base: 5, md: 20, lg: 15 }}
        paddingTop={{ base: 25, lg: "40px" }}
        paddingRight={{ base: 5, md: 20, lg: 25 }}
        // h={1022} //original size too big
        // w={2368}
      >
        <Grid
          templateColumns={"repeat(10, 1fr)"}
          templateRows="repeat(3, 1fr)"
          gap={1}
        >
          <GridItem colSpan={7} rowSpan={2}>
            <DynamicText />
          </GridItem>

          <GridItem colSpan={3} rowSpan={3}>
            <QuickAccess />
          </GridItem>
        </Grid>

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
      </Box>
    </>
  );
};

export default Home;
