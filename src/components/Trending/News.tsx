import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";

const News = () => {
  const { colorMode } = useColorMode();

  const backWallUrl =
    colorMode === "dark"
      ? "url('src/assets/wall2-dark.png')"
      : "url('src/assets/wall2-light.png')";

  const buttonBg =
    colorMode === "dark"
      ? { bg: "valaRed.700", hover: "valaRed.800", expanded: "valaRed.700" }
      : { bg: "gray.200", hover: "gray.300", expanded: "valaRed.50" };

  return (
    <Box
      bgImage={backWallUrl}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
      w={{ base: "338vw", sm: "200vw", lg: "105vw" }}
      minH={{ base: "700vh", sm: "600vh", lg: "400vh" }}
      maxW={"1536px"}
      px={"50px"}
      pt={"130px"}
    >
      <Flex justify={"end"}>
        <Menu>
          <MenuButton
            bg={buttonBg.bg}
            px={10}
            py={3}
            fontSize={"18px"}
            fontWeight={"bold"}
            borderRadius={10}
            borderWidth="3px"
            borderColor={"valaRed.500"}
            transition="all 0.2s" // all transitions' speed
            _hover={{ bg: buttonBg.hover }}
            _expanded={{ bg: buttonBg.expanded }}
            _focus={{ bg: "valaRed.200" }}
          >
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem>All</MenuItem>
            <MenuItem>Latest</MenuItem>
            <MenuItem>XXXX</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default News;
