import { Text } from "@chakra-ui/react";
import ChangingText from "./ChangingText";

const DynamicText = () => {
  return (
    <>
      <Text
        fontSize={{ base: "100px", md: "90px", lg: "xxx-large" }}
        /* xxx-large is 50px */
        fontWeight={"bold"}
      >
        One Stop-Place for
      </Text>
      <br />
      <Text
        fontSize={{ base: "90px", md: "80px", lg: "x-large" }}
        marginTop={-3}
      >
        ALL YOUR
      </Text>
      <ChangingText
        duration={3000}
        texts={[
          "CULINARY NEEDS",
          "MEDICAL ITEMS",
          "SALON SUPPLIES",
          "BAKING ITEMS",
        ]} /* can add more texts */
      />
      <Text
        fontSize={{ base: "60px", lg: "30px" }}
        fontFamily={"Fredoka"}
        marginY={-5}
      >
        NEEDS
      </Text>
    </>
  );
};

export default DynamicText;
