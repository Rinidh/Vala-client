import { Box, Img, useColorMode } from "@chakra-ui/react";

const Home = () => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall1-dark.png')"
      : "url('src/assets/wall1.png')";

  return (
    <Box
      bgImage={backWallUrl}
      w={"100vw"}
      h={"95vh"}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"

      // h={1022} //original size too big
      // w={2368}
    ></Box>
  );
};

export default Home;
