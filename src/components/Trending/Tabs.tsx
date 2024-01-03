import { Center, Button, Box } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

const Tabs = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center position={"relative"}>
        <Box position={"absolute"} top={8}>
          <Button
            mr={20}
            _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
            bg={"transparent"}
            size={"lg"}
            onClick={() => navigate("/trending")} // /trending is the endpoint for news
          >
            News
          </Button>
          <Button
            _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
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
