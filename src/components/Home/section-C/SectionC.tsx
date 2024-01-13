import { HStack } from "@chakra-ui/react";
import Review from "./Review";
import ReviewsCarousel from "./ReviewsCarousel";
import demoReviews from "./demoReviews";

export interface Review {
  name: string;
  image: string;
  review: string;
}

const SectionC = () => {
  return (
    <>
      <HStack>
        <Review />
      </HStack>
      <ReviewsCarousel reviews={demoReviews} />
    </>
  );
};

export default SectionC;
