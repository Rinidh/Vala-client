import { HStack, Show, useColorModeValue, Center } from "@chakra-ui/react";
import Logo from "./Logo";
import Navs from "./Navs";
import NavsMenu from "./NavsMenu";
import SwitchTheme from "./SwitchTheme";
import { createContext } from "react";
// import SearchInput from "./SearchInput";

interface HeaderStyleProps {
  bg: string;
  _hover: { bg: string };
}
export const HeaderStyleContext = createContext<HeaderStyleProps>(
  {} as HeaderStyleProps
);

const Header = () => {
  const headerStyleProps = {
    bg: useColorModeValue("valaBlue.400", "valaBlue.800"),
    _hover: { bg: useColorModeValue("valaBlue.500", "valaBlue.700") },
  };

  return (
    <HeaderStyleContext.Provider value={headerStyleProps}>
      <HStack
        justifyContent={"space-between"}
        h={"100%"}
        pr={8}
        alignItems={"stretch"}
        bg={headerStyleProps.bg}
        color={"white"}
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
    </HeaderStyleContext.Provider>
  );
};

export default Header;
