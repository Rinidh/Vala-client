import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import ChangingText from "./ChangingText";

const Home = () => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall1-dark.png')"
      : "url('src/assets/wall1.png')";

  return (
    <>
      <Box
        bgImage={backWallUrl} /* dark mode blue behind is #140045 */
        w={"100vw"}
        h={"240vh"}
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
        paddingX={15}
        paddingY={10}
        // h={1022} //original size too big
        // w={2368}
      >
        <Text
          fontSize={"xxx-large"}
          /* xxx-large is 50px */
          fontWeight={"bold"}
        >
          One Stop-Place for
        </Text>{" "}
        <br />
        <Text fontSize={"x-large"} marginTop={-5}>
          ALL YOUR
        </Text>
        <ChangingText
          duration={3000}
          texts={["COOKWARE", "MEDICAL", "SALON"]} /* can add more texts */
        />
        <Text fontSize={"30px"} fontFamily={"Fredoka"} marginY={-5}>
          NEEDS
        </Text>
      </Box>
    </>
  );
};

export default Home;
