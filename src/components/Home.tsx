import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import ChangingText from "./ChangingText";

const Home = () => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall1-dark.png')"
      : "url('src/assets/wall1-light.png')";

  return (
    <>
      <Box
        bgImage={backWallUrl} /* dark mode blue behind is #140045 */
        w={{ base: "338vw", sm: "200vw", lg: "100vw" }}
        minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
        bgSize={"cover"}
        bgPosition="center"
        bgRepeat="no-repeat"
        paddingLeft={{ base: 5, md: 20, lg: "60px" }}
        paddingTop={{ base: 25, lg: "40px" }}
        // h={1022} //original size too big
        // w={2368}
      >
        <Text
          fontSize={{ base: "100px", md: "90px", lg: "xxx-large" }}
          /* xxx-large is 50px */
          fontWeight={"bold"}
        >
          One Stop-Place for
        </Text>
        <br />
        <Text
          fontSize={{ base: "90px", md: "80px", lg: "x-large" }}
          marginTop={-3}
        >
          ALL YOUR
        </Text>
        <ChangingText
          duration={3000}
          texts={[
            "CULINARY NEEDS",
            "MEDICAL ITEMS",
            "SALON SUPPLIES",
            "BAKING ITEMS",
          ]} /* can add more texts */
        />
        <Text
          fontSize={{ base: "60px", lg: "30px" }}
          fontFamily={"Fredoka"}
          marginY={-5}
        >
          NEEDS
        </Text>
      </Box>
    </>
  );
};

export default Home;
