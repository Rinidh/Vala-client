import { Box, Show, Text } from "@chakra-ui/react";
import ChangingText from "./ChangingText";

const Texts = () => {
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
        fontSize={{ base: "60px", md: "50px", lg: "30px" }}
        marginTop={-3}
        mb={8}
      >
        ALL YOUR NEEDS IN
      </Text>

      {/* below 416px, the longer changing texts appear on double lines and smaller ones on single line, causing expanding and contracting of page */}
      <Show breakpoint="(max-width: 416px)">
        <Box h={500} bg="darkgreen">
          <ChangingText
            duration={3000}
            texts={[
              "CULINARY NEEDS",
              "MEDICAL ITEMS",
              "SALON SUPPLIES",
              "BAKING ITEMS",
            ]} /* can add more texts */
          />
        </Box>
      </Show>
      <Show breakpoint="(min-width: 416px)">
        <ChangingText
          duration={3000}
          texts={[
            "CULINARY NEEDS",
            "MEDICAL ITEMS",
            "SALON SUPPLIES",
            "BAKING ITEMS",
          ]} /* can add more texts */
        />
      </Show>
    </>
  );
};

export default Texts;
