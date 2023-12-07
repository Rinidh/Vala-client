import { AspectRatio, Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <Box
        h={"100px"}
        w={"100px"}
        bg={"tomato"} /* chnage and use <AspectRatio> with logo img */
      />
    </>
  );
};

export default Logo;
