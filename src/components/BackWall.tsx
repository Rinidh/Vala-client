import { Box, useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const BackWall = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  return (
    <Box
      bgImage={backWallUrl}
      w={{ base: "338vw", sm: "200vw", lg: "105vw" }}
      minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
      maxW={"1536px"}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {children}
    </Box>
  );
};

export default BackWall;
