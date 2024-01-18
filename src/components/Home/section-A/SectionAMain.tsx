import { Grid, GridItem, Box } from "@chakra-ui/react";
import Texts from "./Texts";
import QuickAccess from "./QuickAccess";

const SectionA = () => {
  return (
    <Grid
      templateColumns={"repeat(10, 1fr)"}
      templateRows={{ base: "repeat(8, 1fr)", sm: "repeat(6, 1fr)" }}
      gap={1}
      paddingLeft={{ base: 5, md: 20, lg: 15 }}
      paddingTop={{ base: 25, lg: "40px" }}
      paddingRight={{ base: 5, md: 20, lg: 25 }}
    >
      <GridItem colSpan={{ base: 10, lg: 7 }} rowSpan={2}>
        <Texts />
      </GridItem>

      <GridItem
        colStart={{ base: 1, md: 3, lg: 8 }}
        colSpan={{ base: 10, md: 6, lg: 3 }}
        rowSpan={{ base: 4, md: 3, xl: 4 }}
      >
        <Box marginTop={{ base: 300, sm: 150, lg: 0 }} h={"100%"}>
          <QuickAccess />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SectionA;
