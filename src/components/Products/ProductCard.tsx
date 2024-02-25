import {
  Box,
  Card,
  Image,
  Text,
  CardBody,
  VStack,
  CardFooter,
  Button,
  useColorModeValue,
  Heading,
  useDisclosure,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { BsStarFill } from "react-icons/bs";
import ProductModal from "./ProductModal";

interface Props {
  image?: string;
  name: string;
  description?: string;
  discountPercentage?: string;
  onClick: () => void;
}

const ProductCard = ({
  image,
  name,
  description,
  discountPercentage,
  onClick,
}: Props) => {
  return (
    <>
      <Box position="relative" /* for the tag */>
        <Card
          maxW={{ base: 700, md: 450, lg: 270, xl: 250 }}
          borderRadius={"20px"}
          overflow={"hidden"}
          bg={useColorModeValue("valaBlue.50", "valaBlue.800")}
          _hover={{ bg: useColorModeValue("valaBlue.100", "valaBlue.700") }}
          transition={"all 0.1s linear"}
        >
          <CardBody
            p={0}
            onClick={onClick}
            cursor={"pointer"}
            transition={"all 0.2s linear"}
          >
            <VStack justify={"start"}>
              {image && (
                <Image
                  minH={image ? { base: 500, md: 300, lg: 100 } : "0px"} //the space for minH stays even when img is not passed as prop. Therefore render the minH if image is given
                  maxH={{ base: 1000, md: 800, lg: 400 }}
                  w={"100%"}
                  objectFit="cover"
                  src={image}
                />
              )}
              <Heading
                fontSize={{ base: "90px", md: "70px", lg: "30px" }}
                mt={2}
              >
                {name}
              </Heading>
              <Box minH={{ base: 380, md: 280, lg: 150 }} w={"90%"} mt={7}>
                <Text fontSize={{ base: 50, md: 40, lg: "larger" }}>
                  {description}
                </Text>
              </Box>
            </VStack>
          </CardBody>
          <CardFooter justify={"end"}>
            <Button
              fontSize={{ base: 50, md: 30, lg: 15 }}
              px={{ base: 50, md: 30, lg: 15 }}
              py={{ base: 10, md: 6, lg: 5 }}
              variant={"customVariant"}
            >
              View
            </Button>
          </CardFooter>
        </Card>

        {discountPercentage && (
          <Tag
            size={"lg"}
            variant="solid"
            // color={"yellow"}
            backgroundColor={"yellow"}
            position={"absolute"}
            top={-6}
            right={5}
            zIndex={2}
          >
            <TagLeftIcon boxSize="20px" as={BsStarFill} color={"red"} />
            <TagLabel color={"black"} fontWeight={"bold"}>
              {discountPercentage}% off
            </TagLabel>
          </Tag>
        )}
      </Box>
    </>
  );
};

export default ProductCard;
