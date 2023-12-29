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
      h={{ base: "400vh", sm: "400vh", lg: "300vh" }}
      maxW={"1280px"}
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

        <InfoCard
          name="DHOKIA DHARMESH"
          role="FOUNDER"
          info={infoDharmesh}
          image={placeholder}
        />

        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px" maxW={"800px"}>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
