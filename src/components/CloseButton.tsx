import { useColorModeValue, Box } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

const CloseButton = ({ onCloseModal }: { onCloseModal: () => void }) => {
  return (
    <Box
      position={"absolute"}
      right={4}
      top={4}
      fontSize={{ base: 60, md: 40 }}
      borderRadius={"17%"}
      color={useColorModeValue("black", "white")}
      _hover={{
        bg: useColorModeValue("rgba(0,0,0,0.3)", "rgba(255,255,255,0.3)"),
      }}
      transition={"all 0.1s linear"}
      onClick={() => onCloseModal()}
    >
      <MdClose />
    </Box>
  );
};

export default CloseButton;
