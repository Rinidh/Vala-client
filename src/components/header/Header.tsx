import { HStack, Show, useColorModeValue, Center } from "@chakra-ui/react";
import ThemeSwitch from "./themeSwitch";
import Logo from "./Logo";
import Navs from "./Navs";
import NavsMenu from "./NavsMenu";

// waiting for logo and other resources
// import darkLogo from "../assets/Github-logo-dark.png";
// import logo from "../assets/Github-logo.png";
// import SearchInput from "./SearchInput";
// import About from "./About";
// import "../stylings/Header.css";

// interface Props {
//   onSearch: (searchText: string) => void;
//   onChangeGithubModeStatus: () => void;
// }

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
        <ThemeSwitch />
      </HStack>
    </HStack>
  );
};

export default Header;
