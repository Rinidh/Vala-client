import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import { Review } from "./SectionCMain";

const ReviewsCarousel = ({ reviews }: { reviews: Review[] }) => {
  const settings = {
    // accessibility: true,
    dots: true, //increase the dot-size
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    //   // {
    //   //   breakpoint: 1280,
    //   //   settings: {
    //   //     slidesToShow: 3,
    //   //     slidesToScroll: 1,
    //   //     dots: true,
    //   //   },
    //   // },
    //   {
    //     breakpoint: 1025,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2, ///
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <Box px={"50px"}>
      <Slider {...settings}>
        {reviews.map((r, i) => {
          return (
            <ReviewCard
              key={i}
              name={r.name}
              image={r.image}
              review={r.review}
            />
          );
        })}
      </Slider>
    </Box>
  );
};

export default ReviewsCarousel;
