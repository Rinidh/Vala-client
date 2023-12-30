import { Box, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading?: string;
  children?: ReactNode;
}

const Section = ({ heading, children }: Props) => {
  return (
    <Flex
      bg={"tomato"}
      minH={{ base: 550, lg: "300px" }}
      flexDirection={"column"}
    >
      <Box bg={"yellow"} h={{ base: 110, sm: 90, lg: 50 }} w={"100%"} pl={7}>
        <Heading fontSize={{ base: "100px", sm: "88px", lg: "50px" }}>
          {heading}
        </Heading>
      </Box>

      {children}
    </Flex>
  );
};

export default Section;
