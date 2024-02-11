import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Filter = () => {
  const filters = ["All", "Latest", "XXXX"];

  const menuItemProps = {
    bg: useColorModeValue("valaBlue.50", "valaBlue.800"),
    _hover: {
      bg: useColorModeValue("valaBlue.100", "valaBlue.700"),
    },
    py: 3,
    fontSize: "x-large",
  };

  return (
    <Flex justify={"end"} mb={20}>
      <Menu>
        <MenuButton
          as={Button}
          variant={"customVariant"}
          px={10}
          py={3}
          fontWeight={"bold"}
          borderRadius={10}
          transition="all 0.2s" // all transitions' speed
        >
          Filter
        </MenuButton>
        <MenuList bg={menuItemProps.bg}>
          {filters.map((f) => (
            <MenuItem key={f} {...menuItemProps}>
              {f}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Filter;
