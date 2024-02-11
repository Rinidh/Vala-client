// this file will only hold the content of the popover

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import { HeaderStyleContext } from "./HeaderMain";

interface Props {
  listItems: string[];
}

const ProductsPopOver = ({ listItems }: Props) => {
  const headerStyleProps = useContext(HeaderStyleContext);
  const colors = useColorModeValue(
    { text: "valaBlue.700", back: "valaBlue.50" },
    { text: "valaRed.700", back: "valaBlue.800" }
  );

  // all anchor link names are simply the category names in lower case, and with dashes eg 'MEdiCAL NeeDS' becomes 'medical-needs'
  const anchorLinkNames = listItems.map((item) => {
    const lowerCased = item.replace(/[A-Z]/g, (match) => match.toLowerCase());
    const withDashes = lowerCased.replace(" ", "-");
    return withDashes;
  });

  return (
    <Flex direction={"column"} zIndex="tooltip">
      {listItems.map((item, itemIndex) => (
        <Box
          {...headerStyleProps}
          as="a"
          href={`/products#${anchorLinkNames[itemIndex]}`}
          key={itemIndex}
          w={"100%"}
          px={10}
          py={4}
          transition={"all 0.2s"}
          fontWeight={"bold"}
          zIndex={"tooltip"} //not working over the product cards
        >
          {item}
        </Box>
      ))}
    </Flex>
  );
};

export default ProductsPopOver;
