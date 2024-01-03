import { Center, Button, Box, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

const Tabs = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center position={"relative"}>
        <Box position={"absolute"} top={{ base: 50, lg: 8 }}>
          <Button
            mr={20}
            _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
            fontSize={{ base: "60px", md: "40px", lg: "30px" }}
            px={"100px"}
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
            px={"100px"}
            py={"30px"}
            bg={"transparent"}
            size={"lg"}
            onClick={() => navigate("offers")}
          >
            Offers
          </Button>
        </Box>
      </Center>

      <Outlet />
    </>
  );
};

export default Tabs;
