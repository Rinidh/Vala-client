import {
  Box,
  Card,
  useColorMode,
  Text,
  CardBody,
  Image,
  HStack,
} from "@chakra-ui/react";

import placeholder from "../../assets/placeholder1.png";

const About = () => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

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
        bgColor={"rgba(0,0,0,0.3)"} //transperancy
        paddingX={10}
        paddingY={30}
      >
        <Card maxW={600} borderRadius={"30px"}>
          <CardBody>
            <HStack>
              <Image
                boxSize="240px"
                objectFit="cover"
                src={placeholder} ///
                alt="Dhokia Dharmesh"
                borderRadius={"50%"} //always round
                mr={5}
              />
              <Text fontSize={"larger"}>
                Incorporated VALA (U) LTD in 2007... Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Velit quasi deserunt similique
                incidunt obcaecati. Ratione, assumenda esse. Ab, molestiae
                accusamus.
              </Text>
            </HStack>
          </CardBody>
          <Box pl={10} mb={5}>
            <Text fontWeight={"bold"} fontSize={"larger"}>
              DHARMESH DHOKIA
            </Text>
            <Text fontSize={"sm"}>FOUNDER</Text>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default About;
