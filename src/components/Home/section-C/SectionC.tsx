import {
  Box,
  Grid,
  GridItem,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Review from "./Review";
import ReviewsCarousel from "./ReviewsCarousel";
import demoReviews from "./demoReviews";
import ReviewCard from "./ReviewCard";

export interface Review {
  name: string;
  image?: string;
  review: string;
}

const SectionC = () => {
  return (
    <>
      <Box
        px={{ base: 10, md: 20 }}
        pt={100}
        position={"relative"}
        bg={useColorModeValue("valaBlue.100", "valaBlue.800")}
      >
        <Grid
          templateColumns={"repeat(9, 1fr)"}
          templateRows={"repeat(10, 1fr)"}
          gap={8}
          h={{ base: 3000, sm: 1300, xl: 1000 }}
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

          <GridItem colSpan={{ base: 9, md: 3 }} rowSpan={{ base: 13, md: 3 }}>
            <ReviewCard name="name" review="review..." />
          </GridItem>
          <GridItem
            colSpan={{ base: 9, md: 3 }}
            rowSpan={{
              base: 13,
              md: 2,
            }} /* this is the 1st card in the third line */
          >
            <ReviewCard name="name" review="review..." />
          </GridItem>
          <GridItem colSpan={{ base: 9, md: 3 }} rowSpan={{ base: 13, md: 2 }}>
            <ReviewCard name="name" review="review..." />
          </GridItem>
        </Grid>

        <Box
          left={0}
          right={0}
          bottom={150} //start from bottom
          position={"absolute"}
        >
          <Box
            h={200}
            bgGradient={useColorModeValue(
              "linear(to-t, valaBlue.100, transparent)",
              "linear(to-t, valaBlue.800, transparent)"
            )}
          />
          <Box h={100} bg={useColorModeValue("valaBlue.100", "valaBlue.800")} />
        </Box>
      </Box>
    </>
  );
};

export default SectionC;
