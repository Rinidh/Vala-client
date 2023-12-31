import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading?: string;
  children?: ReactNode;
}

const Section = ({ heading, children }: Props) => {
  return (
    <Flex
      // bg={"tomato"}
      minH={{ base: 550, lg: "300px" }}
      flexDirection={"column"}
    >
      <Box
        // bg={"yellow"}
        h={{ base: 110, sm: 90, lg: 50 }}
        w={"100%"}
        pl={7}
        mb={10}
      >
        <Heading
          fontSize={{ base: "70px", sm: "75px", lg: "48px" }}
          textDecor={"underline"}
        >
          {heading}
        </Heading>
      </Box>

      {children}
    </Flex>
  );
};

export default Section;
