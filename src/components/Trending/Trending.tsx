import { Box, Button, Center, Link, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  return (
    <Box
      bgImage={backWallUrl}
      w={{ base: "338vw", sm: "200vw", lg: "105vw" }}
      minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
      maxW={"1536px"}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
      px={"50px"}
      py={"30px"}
    >
      <Center h={20}>
        <Button
          mr={20}
          _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
          bg={"transparent"}
          size={"lg"}
        >
          News
        </Button>
        <Button
          _hover={{ bg: "rgba(0, 0, 0, 0.2)" }}
          bg={"transparent"}
          size={"lg"}
        >
          Offers
        </Button>
      </Center>
    </Box>
  );
};

export default Trending;
