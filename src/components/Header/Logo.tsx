import { AspectRatio, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <AspectRatio w={{ base: "200px", sm: "140px", lg: "78px" }} ratio={1 / 1}>
        <Image src={logo} objectFit={"contain"} />
      </AspectRatio>
    </>
  );
};

export default Logo;
