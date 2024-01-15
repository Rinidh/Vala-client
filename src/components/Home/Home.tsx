import { Box, useColorMode } from "@chakra-ui/react";
import BackToTop from "../BackToTop";
import SectionA from "./section-A";
import SectionC from "./section-C";

const Home = () => {
  const { colorMode } = useColorMode();

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
        // h={1022} //original size too big
        // w={2368}
      >
        <SectionA />

        <SectionC />
      </Box>

      <BackToTop />
    </>
  );
};

export default Home;
