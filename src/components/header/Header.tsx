import { HStack, useColorModeValue } from "@chakra-ui/react";
import ThemeSwitch from "./themeSwitch";
import Logo from "../Logo";
import Navs from "./Navs";

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
      pr={8}
      alignItems={"stretch"}
      bg={bg}
    >
      <Logo />
      <HStack spacing={10} alignItems={"stretch"}>
        <Navs />
        <ThemeSwitch />
      </HStack>
    </HStack>
  );
};

export default Header;
