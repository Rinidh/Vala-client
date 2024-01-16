import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsBrief = () => {
  const navigate = useNavigate();

  return (
    <Box boxSize={"100%"} p={30}>
      <Heading size={"4xl"} mb={7}>
        Serving the Pearl of Africa for over a decade with Innovative Products
      </Heading>
      <Text mb={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        veniam suscipit consequuntur facere impedit mollitia qui hic culpa
        consequatur. Distinctio!
      </Text>
      <Button
        fontSize={{ base: 50, md: 30, lg: 15 }}
        px={{ base: 50, md: 30, lg: 15 }}
        py={{ base: 10, md: 6, lg: 5 }}
        colorScheme={"valaBlue"}
        color={"white"}
        onClick={() => navigate("/products")}
      >
        See all Products
      </Button>
    </Box>
  );
};

export default ProductsBrief;
