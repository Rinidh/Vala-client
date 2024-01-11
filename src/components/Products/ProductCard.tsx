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
} from "@chakra-ui/react";
import ProductModal from "./ProductModal";

interface Props {
  image?: string;
  name: string;
  description?: string;
}

const ProductCard = ({ image, name, description }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const colors = useColorModeValue(
    {
      bg: "rgba(255,255,255,0.4)",
      button: "valaRed",
    },
    {
      bg: "rgba(0,0,0,0.4)",
      button: "valaBlue",
    }
  );

  return (
    <>
      <Card
        maxW={{ base: 700, md: 450, lg: 270, xl: 250 }}
        borderRadius={"20px"}
        bg={"transparent"}
        overflow={"hidden"}
      >
        <Box
          //provides the blurred background
          position={"absolute"}
          backdropFilter={"blur(25px)"}
          height={"100%"}
          w={"100%"}
          bg={colors.bg}
        />

        <Box zIndex={1} onClick={onOpen} cursor={"pointer"}>
          <CardBody p={0}>
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
              colorScheme={colors.button}
              color={"white"}
            >
              View Sellers
            </Button>
          </CardFooter>
        </Box>
      </Card>

      <ProductModal
        heading="heading"
        image={image}
        info={description}
        isOpen={isOpen}
        onClose={() => onClose()}
      />
    </>
  );
};

export default ProductCard;
