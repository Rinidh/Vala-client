import { Box, useColorMode } from "@chakra-ui/react";
import bg from "../../assets/wall1-light.png";
import bgDark from "../../assets/wall1-dark.png";
import BackToTop from "../BackToTop";
import SectionA from "./section-A/SectionAMain";
import SectionC from "./section-C/SectionCMain";
import SectionB from "./section-B/SectionBMain";
import SectionD from "./section-D/SectionDMain";

const Home = () => {
  const { colorMode } = useColorMode();

  const backWall = colorMode === "dark" ? bgDark : bg;

  return (
    <>
      <Box
        bgImage={backWall} /* dark mode blue behind is #140045 */
        w={{ base: "338vw", sm: "200vw", lg: "100vw" }}
        minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
        // h={1022} //original size too big
        // w={2368}
      >
        <SectionA />

        <SectionB />

        <SectionC />

        <SectionD />
      </Box>

      <BackToTop />
    </>
  );
};

export default Home;
