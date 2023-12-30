import {
  Box,
  useColorMode,
  Heading,
  Center,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";

import placeholder from "../../assets/placeholder1.png";
import InfoCard from "./InfoCard";
import Section from "./Section";

const About = () => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  const infoDharmesh =
    "Incorporated VALA (U) LTD in 2007... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quasi deserunt similique incidunt obcaecati. Ratione, assumenda esse. Ab, molestiae accusamus.";

  return (
    <Box
      bgImage={backWallUrl}
      w={{ base: "338vw", sm: "200vw", lg: "105vw" }}
      h={{ base: "700vh", sm: "600vh", lg: "400vh" }}
      maxW={"1536px"}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box
        bgColor={"rgba(0,0,0,0.1)"} //transperancy
        paddingX={10}
        paddingY={30}
        h="100%"
      >
        <Center mb={50}>
          <Heading fontSize={"xxx-large"} fontFamily={"Merriweather"}>
            About Us
          </Heading>
        </Center>
        <hr style={{ border: "3px solid", marginBottom: "30px" }} />

        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="5px">
          <Section heading="ABC">abcd</Section>
          <Section />
          <Section />
          <Section />
          <Section />
          <Section />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
