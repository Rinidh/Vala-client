import { Box, Heading, Center, Text, SimpleGrid, Flex } from "@chakra-ui/react";

import placeholder from "../../assets/placeholder1.png";
import InfoCard from "./InfoCard";
import Section from "./Section";
import BackWall from "../BackWall";
import BackToTop from "../BackToTop";

const About = () => {
  const infoDharmesh =
    "Incorporated VALA (U) LTD in 2007... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quasi deserunt similique incidunt obcaecati. Ratione, assumenda esse. Ab, molestiae accusamus.";

  const demoText = (
    <Text pt="20px" fontSize={{ base: "40px", lg: "20px" }} mb={7}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, in
      voluptates debitis sunt quae, facilis quasi nisi voluptas architecto
      placeat adipisci optio nulla tempora! Illum voluptas omnis, dolore fugit
      provident doloremque facere accusamus ut exercitationem error animi
      laborum praesentium recusandae.
    </Text>
  );

  return (
    <BackWall>
      <Box px={10} py={30}>
        <Center mb={50}>
          <Heading fontSize={"xxx-large"} fontFamily={"Merriweather"} mt={30}>
            About Us
          </Heading>
        </Center>
        <hr style={{ border: "3px solid", marginBottom: "60px" }} />
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacingX={{ base: 10, lg: 6 }}
          spacingY={{ base: 20, lg: 20 }}
        >
          <Section heading="PROFILE">
            <Heading fontSize={{ base: "50px", lg: "27px" }}>Mission</Heading>
            {demoText}
            <Heading fontSize={{ base: "50px", lg: "27px" }}>Vision</Heading>
            {demoText}
          </Section>
          <Section>
            <Heading fontSize={{ base: "50px", lg: "27px" }}>
              Objectives
            </Heading>
            {demoText}
          </Section>
          <Section heading="FOUNDER">
            <Flex align="center" h={"100%"}>
              <InfoCard
                name="DHOKIA DHARMESH"
                role="FOUNDER"
                info={infoDharmesh}
                image={placeholder}
              />
            </Flex>
          </Section>
          <Section>{demoText}</Section>
          <Section heading="HISTORY">{demoText}</Section>
          <Section>{demoText}</Section>
          <Section heading="XXXX">{demoText}</Section>
          <Section>{demoText}</Section>
        </SimpleGrid>
        <BackToTop />
      </Box>
    </BackWall>
  );
};

export default About;
