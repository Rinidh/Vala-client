import { AspectRatio, Box } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <AspectRatio
        w={{ base: "200px", sm: "140px", lg: "100px" }}
        ratio={1 / 1}
      >
        <Box
          h={"100%"}
          w={"100%"}
          bg={"tomato"} /* chnage and use <AspectRatio> with logo img */
          children={"Logo"}
        />
      </AspectRatio>
    </>
  );
};

export default Logo;
