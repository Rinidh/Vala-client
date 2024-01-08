import { AspectRatio, Image } from "@chakra-ui/react";
import logoOnly from "../../assets/logo-only.png";

const Logo = () => {
  return (
    <>
      <AspectRatio w={{ base: "200px", sm: "140px", lg: "78px" }} ratio={1 / 1}>
        <Image src={logoOnly} objectFit={"contain"} />
      </AspectRatio>
    </>
  );
};

export default Logo;
