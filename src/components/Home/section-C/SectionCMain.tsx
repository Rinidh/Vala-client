import { Box, Grid, GridItem, Show, useColorModeValue } from "@chakra-ui/react";
import Review from "./Review";
import ReviewCard from "./ReviewCard";

export interface Review {
  name: string;
  image?: string;
  review: string;
}

const SectionC = () => {
  const colors = useColorModeValue(
    {
      gradient: "linear(to-t, valaBlue.100, transparent)",
      bg: "valaBlue.100",
    },
    {
      gradient: "linear(to-t, valaBlue.800, transparent)",
      bg: "valaBlue.800",
    }
  );

  return (
    <>
      <Box
        px={{ base: 10, md: 20 }}
        pt={100}
        position={"relative"}
        bg={colors.bg}
      >
        <Grid
          templateColumns={"repeat(9, 1fr)"}
          templateRows={{ base: "repeat(70, 1fr)", md: "repeat(10, 1fr)" }}
          gap={8}
          h={{ base: 3000, md: 1000, xl: 1000 }}
        >
          <GridItem colSpan={{ base: 9, md: 5 }} rowSpan={{ base: 13, md: 3 }}>
            <Review />
          </GridItem>
          <GridItem colSpan={{ base: 9, md: 4 }} rowSpan={{ base: 13, md: 3 }}>
            <ReviewCard name="name" review="review..." />
          </GridItem>

          <GridItem colSpan={{ base: 9, md: 3 }} rowSpan={{ base: 13, md: 3 }}>
            <ReviewCard name="name" review="review..." />
          </GridItem>
          <GridItem colSpan={{ base: 9, md: 3 }} rowSpan={{ base: 13, md: 2 }}>
            <ReviewCard name="name" review="review..." />
          </GridItem>
          <GridItem colSpan={{ base: 9, md: 3 }} rowSpan={{ base: 13, md: 3 }}>
            <ReviewCard name="name" review="review..." />
          </GridItem>

          <Show above="md">
            <GridItem colSpan={3} rowSpan={3}>
              <ReviewCard name="name" review="review..." />
            </GridItem>
            <GridItem
              colSpan={3}
              rowSpan={2} /* this is the 1st card in the third line */
            >
              <ReviewCard name="name" review="review..." />
            </GridItem>
            <GridItem colSpan={3} rowSpan={2}>
              <ReviewCard name="name" review="review..." />
            </GridItem>
          </Show>
        </Grid>

        <Box
          left={0}
          right={0}
          bottom={{ base: 180, md: 170, lg: 150 }} //start from bottom
          position={"absolute"}
        >
          <Box h={210} bgGradient={colors.gradient} />
          <Box h={100} bg={colors.bg} />
        </Box>
      </Box>
    </>
  );
};

export default SectionC;
