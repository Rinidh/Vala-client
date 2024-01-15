import { Center, Button, Box, Text, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

const Tabs = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        dir="row"
        position={"absolute"}
        top={{ base: 250, sm: 200, lg: 140 }}
        left={{ base: 5, xl: 10 }}
      >
        <Button
          mr={{ base: 0, xl: 15 }}
          _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
          fontSize={{ base: "60px", md: "40px", lg: "30px" }}
          px={"50px"}
          py={"30px"}
          bg={"transparent"}
          size={"lg"}
          onClick={() => navigate("/trending")} // /trending is the endpoint for news
        >
          News
        </Button>
        <Button
          _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
          fontSize={{ base: "60px", md: "40px", lg: "30px" }}
          px={"50px"}
          py={"30px"}
          bg={"transparent"}
          size={"lg"}
          onClick={() => navigate("offers")} // relative link
        >
          Offers
        </Button>
      </Flex>

      <Outlet />
    </>
  );
};

export default Tabs;
