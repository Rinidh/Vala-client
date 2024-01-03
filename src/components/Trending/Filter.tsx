import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";

const Filter = () => {
  const { colorMode } = useColorMode();

  const buttonBg =
    colorMode === "dark"
      ? { bg: "valaRed.700", hover: "valaRed.800", expanded: "valaRed.700" }
      : { bg: "gray.200", hover: "gray.300", expanded: "valaRed.50" };

  return (
    <Flex justify={"end"} mb={20}>
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
          <MenuItem fontSize={"x-large"}>All</MenuItem>
          <MenuItem fontSize={"x-large"}>Latest</MenuItem>
          <MenuItem fontSize={"x-large"}>XXXX</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Filter;
