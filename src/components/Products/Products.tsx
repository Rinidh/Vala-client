import BackWall from "../BackWall";
import ProductCarousel from "./ProductsCarousel";
import { Heading } from "@chakra-ui/react";

export interface Product {
  name: string;
  image?: string;
  description?: string;
}

const Products = () => {
  const products = [
    { name: "Product 1", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 2", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 12", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 24", image: 'url("src/assets/placeholder1.png")' },
    { name: "Product 17", image: 'url("src/assets/placeholder1.png")' },
  ];

  return (
    <BackWall px py>
      <Heading size={"xl"}>Culinary Needs</Heading>
      <Heading size={"xl"}>Baking Items</Heading>
      <Heading size={"xl"}>Medical Items</Heading>
      <Heading size={"xl"}>Salon Supplies</Heading>

      <ProductCarousel products={products} />
    </BackWall>
  );
};

export default Products;
