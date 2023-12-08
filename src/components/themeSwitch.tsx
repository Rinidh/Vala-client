import { Box, Button, Center, useColorMode } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <Button onClick={toggleColorMode}>
        {colorMode === "dark" ? <BsSunFill /> : <BsMoonFill />}
      </Button>
    </Center>
  );
};

export default ThemeSwitch;
