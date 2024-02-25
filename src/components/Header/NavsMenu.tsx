// rather implement a drawer instead of a Menu. The Drawer has issues with responsive screen size, though it works at the docs webpg, it doesn't work here??

import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { HeaderStyleContext } from "./HeaderMain";

interface Props {
  navs: string[];
}

export default function NavsMenu({ navs }: Props) {
  const navigate = useNavigate();
  const headerStyleProps = useContext(HeaderStyleContext);

  const lowerCased = navs.map((nav) => {
    return nav.replace(/[A-Z]/g, (match) => match.toLowerCase());
  });

  const pageLinks = lowerCased.map((navLink) =>
    navLink === "home" ? "" : navLink
  );
  //replace the 'home' with empty '' coz home is at index route not at '/home'

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Navigate to different pages"
          fontSize={{ base: "50px", sm: "30px", lg: "20px" }}
          py={{ base: "50px", sm: "40px" }}
          px={"40px"}
          borderRadius={20}
          icon={<GiHamburgerMenu />}
          colorScheme="valaBlue"
        />
        <MenuList w={{ base: "700px", sm: "500px" }} p={0} zIndex={100}>
          {navs.map((nav, index) => (
            <MenuItem
              {...headerStyleProps}
              key={index}
              pl={"50px"}
              py={{ base: 70, sm: 50 }}
              w={"100%"}
              fontSize={{ base: "60px", sm: "35px" }}
              fontWeight={"bold"}
              onClick={() => navigate(`/${pageLinks[index]}`)}
            >
              {nav}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>{" "}
    </>
  );
}
