import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import bg2 from "../assets/wall2-light.png";
import bg2Dark from "../assets/wall2-dark.png";

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

  const backWallUrl = colorMode === "dark" ? bg2Dark : bg2;

  return (
    <Box
      bg={useColorModeValue("gray.50", "valaBlue.900")}
      w={{ base: "338vw", sm: "200vw", lg: "105vw" }}
      minH={{ base: "400vh", sm: "300vh", lg: "200vh" }}
      maxW={"1536px"}
      paddingX={px ? 10 : 0}
      paddingY={py ? 30 : 0}
    >
      {children}
    </Box>
  );
};

export default BackWall;
