import { Button, useColorMode } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </Button>
  );
};

export default ThemeSwitch;
