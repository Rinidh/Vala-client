import {
  Box,
  useColorMode,
  Heading,
  Center,
  Text,
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

  const demoText = (
    <Text pt="20px" fontSize={"20px"} mb={7}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, in
      voluptates debitis sunt quae, facilis quasi nisi voluptas architecto
      placeat adipisci optio nulla tempora! Illum voluptas omnis, dolore fugit
      provident doloremque facere accusamus ut exercitationem error animi
      laborum praesentium recusandae.
    </Text>
  );

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
        <hr style={{ border: "3px solid", marginBottom: "60px" }} />

        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacingX={{ base: 10, lg: 6 }}
          spacingY={20}
        >
          <Section heading="PROFILE">
            <Heading fontSize={"27px"}>Mission</Heading>
            {demoText}
            <Heading fontSize={"27px"}>Vision</Heading>
            {demoText}
          </Section>
          <Section>
            <Heading fontSize={"27px"}>Objectives</Heading>
            {demoText}
          </Section>

          <Section heading="FOUNDER">
            <InfoCard
              name="DHOKIA DHARMESH"
              role="FOUNDER"
              info={infoDharmesh}
              image={placeholder}
            />
          </Section>
          <Section>{demoText}</Section>

          <Section heading="HISTORY">{demoText}</Section>
          <Section>{demoText}</Section>

          <Section heading="XXXX">{demoText}</Section>
          <Section>{demoText}</Section>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
