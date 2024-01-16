import { SimpleGrid } from "@chakra-ui/react";
import Filter from "./Filter";
import Newscard from "./NewsCard";
import placeholder1 from "../../assets/placeholder1.png";
import BackWall from "../BackWall";
import BackToTop from "../BackToTop";
import SubscribeToNews from "./SubscribeToNews";

type Filter = "All" | "Latest";

const News = () => {
  return (
    <BackWall px py>
      <Filter />

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10} mt={"150px"}>
        <Newscard info="info" heading="heading" />
        <Newscard info="info" heading="heading" />
        <Newscard info="info" heading="heading" />
        <Newscard image={placeholder1} info="info" heading="heading" />
        <Newscard image={placeholder1} info="info" heading="heading" />
      </SimpleGrid>

      <SubscribeToNews />

      <BackToTop />
    </BackWall>
  );
};

export default News;
