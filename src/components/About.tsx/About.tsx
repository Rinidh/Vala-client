import { Box, useColorMode } from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  return (
    <>
      <Box
        bgImage={backWallUrl} /* dark mode blue behind is #140045 */
        w={"100vw"}
        h={"280vh"}
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
      ></Box>
    </>
  );
};

export default About;
