import { Grid, GridItem, Box } from "@chakra-ui/react";
import Texts from "./Texts";
import QuickAccess from "./QuickAccess";

const SectionA = () => {
  return (
    <Grid
      templateColumns={"repeat(10, 1fr)"}
      templateRows="repeat(6, 1fr)"
      gap={1}
    >
      <GridItem colSpan={{ base: 10, lg: 7 }} rowSpan={2}>
        <Texts />
      </GridItem>

      <GridItem
        colStart={{ base: 1, md: 3, lg: 8 }}
        colSpan={{ base: 10, md: 6, lg: 3 }}
        rowSpan={{ base: 4, lg: 3, xl: 4 }}
      >
        <Box marginTop={{ base: 300, sm: 150, lg: 0 }} h={"100%"}>
          <QuickAccess />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SectionA;
