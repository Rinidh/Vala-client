import BackWall from "../BackWall";
import ProductCard from "./ProductCard";
import placeholder1 from "../../assets/placeholder1.png";

const Products = () => {
  return (
    <BackWall px py>
      <ProductCard
        name="Vala's Spirit"
        image={placeholder1}
        description="description..."
      />
    </BackWall>
  );
};

export default Products;
