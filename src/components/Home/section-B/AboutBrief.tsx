import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AboutBrief = () => {
  const navigate = useNavigate();

  return (
    <Box boxSize={"100%"} p={30} textAlign={"right"}>
      <Heading mb={7} fontSize={{ base: "130px", md: "90px", lg: "50px" }}>
        Based in Jinja City from 2007, we cover many areas of Uganda...
      </Heading>
      <Text mb={3} fontSize={{ base: "60px", md: "35px", lg: "20px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        veniam suscipit consequuntur facere impedit mollitia qui hic culpa
        consequatur. Distinctio!
      </Text>
      <Button
        fontSize={{ base: "60px", md: "35px", lg: "20px" }}
        px={{ base: 50, md: 30, lg: 15 }}
        py={{ base: 10, md: 6, lg: 5 }}
        colorScheme={"valaBlue"}
        color={"white"}
        onClick={() => navigate("/about")}
      >
        See History
      </Button>
    </Box>
  );
};

export default AboutBrief;
