import { useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { Product } from "./Products";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholder1 from "../../assets/placeholder1.png";

const ProductCarousel = ({ products }: { products: Product[] }) => {
  // If not using the react-slick lib, this logic is helpful
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  // };
  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? products.length - 1 : prevIndex - 1
  //   );
  // };

  const settings = {
    accessibility: true,
    dots: true, //increase the dot-size
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box px={"50px"}>
      <Slider {...settings}>
        {products.map((p, i) => (
          <ProductCard name={p.name} image={placeholder1} key={i} />
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
