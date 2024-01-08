// rather implement a drawer instead of a Menu. The Drawer has issues with responsive screen size, though it works at the docs webpg, it doesn't work here??

import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  navs: string[];
}

export default function NavsMenu({ navs }: Props) {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options" //??
          fontSize={{ base: "50px", sm: "30px", lg: "20px" }}
          py={{ base: "50px", sm: "40px" }}
          px={"40px"}
          borderRadius={20}
          icon={<GiHamburgerMenu />}
          colorScheme="valaBlue"
          // children={"Go To"}
        />
        <MenuList w={{ base: "700px", sm: "500px" }}>
          {navs.map((nav, index) => (
            <MenuItem
              key={index}
              pl={"50px"}
              py={{ base: 70, sm: 50 }}
              w={"100%"}
              fontSize={{ base: "60px", sm: "35px" }}
              // bg={colors.back}
              fontWeight={"bold"}
              bg={useColorModeValue("valaBlue.50", "valaBlue.800")}
            >
              {nav}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>{" "}
    </>
  );
}
