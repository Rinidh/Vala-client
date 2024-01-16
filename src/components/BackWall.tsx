import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  py?: boolean;
  px?: boolean;
  // px?:
  //   | ResponsiveValue< //the type of value if I were to pass instead of boolean
  //       //note the | before
  //       | number
  //       | (string & {})
  //       | "inherit"
  //       | "-moz-initial"
  //       | "initial"
  //       | "revert"
  //       | "revert-layer"
  //       | "unset"
  //     >
  //   | undefined;
}

const BackWall = ({ children, px, py }: Props) => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  return (
    <Box
      bgImage={backWallUrl}
      w={{ base: "338vw", sm: "200vw", lg: "105vw" }}
      minH={{ base: "400vh", sm: "300vh", lg: "200vh" }}
      maxW={"1536px"}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
      paddingX={px ? 10 : 0}
      paddingY={py ? 30 : 0}
    >
      {children}
    </Box>
  );
};

export default BackWall;
