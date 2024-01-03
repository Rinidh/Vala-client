import { Box, useColorMode } from "@chakra-ui/react";
import Filter from "./Filter";
import { useState } from "react";
import Newscard from "./NewsCard";
import placeholder1 from "../../assets/placeholder1.png";

type Filter = "All" | "Latest";

const News = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  return (
    <Box
      bgImage={backWallUrl}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
      w={{ base: "338vw", sm: "200vw", lg: "105vw" }}
      minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
      maxW={"1536px"}
      px={"50px"}
      pt={"130px"}
    >
      <Filter />
      <Newscard image={placeholder1} info="info" heading="heading" />
    </Box>
  );
};

export default News;
