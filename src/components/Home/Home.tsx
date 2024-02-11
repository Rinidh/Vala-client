import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
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
        bg={useColorModeValue("gray.50", "valaBlue.900")}
        w={{ base: "338vw", sm: "200vw", lg: "100vw" }}
        minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
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
