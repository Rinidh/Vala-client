import { Box } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import placeholder1 from "../../assets/placeholder1.png";
import { Product } from "../../data/products";

interface Props {
  products: Product[];
  onClickProductCard: (fullName: string) => void; //fullName is the only thing that uniquely identifies each product as for now
}

const ProductCarousel = ({ products, onClickProductCard }: Props) => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2, ///
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
          <ProductCard
            name={p.name}
            image={placeholder1}
            onClick={() => onClickProductCard(p.fullName)}
            key={i}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
