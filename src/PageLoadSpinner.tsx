import {
  AspectRatio,
  Box,
  Spinner,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import logoOnly from "./assets/logo-only.png";
import { useEffect, useRef } from "react";

const PageLoadSpinner = ({ show }: { show: boolean }) => {
  const pageLoadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        if (pageLoadRef.current) {
          pageLoadRef.current.style.opacity = "0";
        }
      }, 1000);
    } else {
      if (pageLoadRef.current) pageLoadRef.current.style.opacity = "1";
    }
  }, [show]);

  const removeFromDOM = () => {
    if (pageLoadRef.current) pageLoadRef.current.style.display = "none";
  };

  return (
    <Flex
      ref={pageLoadRef}
      position={"fixed"}
      top={0}
      bottom={0}
      left={0}
      right={0}
      // opacity={show ? 1 : 0}
      transition={"opacity 0.4s linear"}
      onTransitionEnd={removeFromDOM}
      bg={useColorModeValue("white", "valaBlue.800")}
      zIndex={100}
      //use other libs eg emotion & react-transition-group to create a smooth transition when disappearing instead of complicated code in this component
    >
      <Flex
        // bg={"gray"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        justify={"center"}
        direction={"column"}
      >
        <AspectRatio
          w={{ base: "400px", sm: "280px", lg: "156px" }}
          ratio={1 / 1}
          mb={10}
        >
          <Image src={logoOnly} objectFit={"contain"} />
        </AspectRatio>
        <Spinner size={"xl"} />
      </Flex>
    </Flex>
  );
};

export default PageLoadSpinner;
