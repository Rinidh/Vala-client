import { Center, IconButton, useColorMode } from "@chakra-ui/react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const SwitchTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <IconButton
        onClick={toggleColorMode}
        aria-label={
          colorMode === "dark" ? "Change to light mode" : "Change to dark mode"
        }
        fontSize={{ base: "50px", sm: "30px", lg: "20px" }}
        p={{ base: "50px", sm: "30px", lg: "20px" }}
        borderRadius={10}
        icon={colorMode === "dark" ? <BsSunFill /> : <BsMoonFill />}
        colorScheme="valaBlue"
      />
    </Center>
  );
};

export default SwitchTheme;
