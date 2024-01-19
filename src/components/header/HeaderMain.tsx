import { HStack, Show, useColorModeValue, Center } from "@chakra-ui/react";
import Logo from "./Logo";
import Navs from "./Navs";
import NavsMenu from "./NavsMenu";
import SwitchTheme from "./SwitchTheme";
// import SearchInput from "./SearchInput";

const Header = () => {
  const bg = useColorModeValue("valaBlue.50", "valaBlue.800");

  return (
    <HStack
      justifyContent={"space-between"}
      h={"100%"}
      pr={8}
      alignItems={"stretch"}
      bg={bg}
    >
      <HStack pl={3}>
        <Logo />

        <Center ml={10}>
          <Show
            breakpoint="(max-width: 991px)" /* because at width 992px and above, the Navs are visible */
          >
            <NavsMenu
              navs={["Home", "Products", "Trending", "About", "XXXX"]}
            />
          </Show>
        </Center>
      </HStack>

      <HStack alignItems={"stretch"}>
        <Navs />
        <SwitchTheme />
      </HStack>
    </HStack>
  );
};

export default Header;
