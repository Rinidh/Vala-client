import { Box, useColorMode, Heading, Center } from "@chakra-ui/react";

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
      w={"100vw"}
      h={"280vh"}
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
        <Center mb={70}>
          <Heading fontSize={"xxx-large"} fontFamily={"Merriweather"}>
            About Us
          </Heading>
        </Center>
        <InfoCard
          name="DHOKIA DHARMESH"
          role="FOUNDER"
          info={infoDharmesh}
          image={placeholder}
        />
      </Box>
    </Box>
  );
};

export default About;
