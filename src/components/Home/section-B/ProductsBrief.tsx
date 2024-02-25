import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsBrief = () => {
  const navigate = useNavigate();

  return (
    <Box boxSize={"100%"} p={30}>
      <Heading fontSize={{ base: "130px", md: "90px", lg: "50px" }} mb={7}>
        Serving the Pearl of Africa for over a decade with Innovative Products
      </Heading>
      <Text
        mb={3}
        maxW={{ base: "auto", lg: "350px" }}
        fontSize={{ base: "60px", md: "35px", lg: "20px" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        veniam suscipit consequuntur facere impedit mollitia qui hic culpa
        consequatur. Distinctio!
      </Text>
      <Button
        px={{ base: 50, md: 30, lg: 15 }}
        py={{ base: 10, md: 6, lg: 5 }}
        variant={"customVariant"}
        onClick={() => navigate("/products")}
      >
        See all Products
      </Button>
    </Box>
  );
};

export default ProductsBrief;
