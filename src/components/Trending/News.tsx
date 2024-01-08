import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import Filter from "./Filter";
import { useState } from "react";
import Newscard from "./NewsCard";
import placeholder1 from "../../assets/placeholder1.png";
import BackWall from "../BackWall";

type Filter = "All" | "Latest";

const News = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  return (
    <BackWall>
      <Filter />

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
        <Newscard info="info" heading="heading" />
        <Newscard info="info" heading="heading" />
        <Newscard info="info" heading="heading" />
        <Newscard image={placeholder1} info="info" heading="heading" />
        <Newscard image={placeholder1} info="info" heading="heading" />
      </SimpleGrid>
    </BackWall>
  );
};

export default News;
