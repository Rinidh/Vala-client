import {
  Card,
  CardBody,
  Box,
  Image,
  Text,
  useColorModeValue,
  VStack,
  CardFooter,
  CardHeader,
  Heading,
  Button,
} from "@chakra-ui/react";

interface Props {
  image?: string;
  info: string;
  heading: string;
}

const Newscard = ({ image, info, heading }: Props) => {
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
    <Card
      maxW={{ base: 1000, lg: 450 }}
      borderRadius={"30px"}
      bg={useColorModeValue("valaBlue.50", "valaBlue.800")}
      _hover={{ bg: useColorModeValue("valaBlue.100", "valaBlue.700") }}
      overflow={"hidden"}
    >
      <Box h={"100%"} position={"relative"}>
        <CardHeader>
          <Heading fontSize={{ base: "90px", md: "70px", lg: "30px" }}>
            {heading}
          </Heading>
        </CardHeader>

        <CardBody p={0}>
          <VStack justify={"start"}>
            ({image} && (
            <Image
              minH={image ? { base: 500, md: 300, lg: 100 } : "0px"} //the space for minH stays even when img is not passed as prop. Therefore render the minH if image is given
              maxH={{ base: 900, md: 600, lg: 200 }}
              w={"100%"}
              objectFit="cover"
              src={image}
            />
            ))
            <Box minH={{ base: 400, md: 300, lg: 200 }} w={"90%"}>
              <Text fontSize={{ base: 50, md: 40, lg: "larger" }}>{info}</Text>
            </Box>
          </VStack>
        </CardBody>

        <CardFooter
          position={"absolute"}
          bottom={{ base: 7, md: 0 }}
          right={{ base: 7, md: 0 }}
        >
          <Button
            variant={"customVariant"}
            px={{ base: 50, md: 30, lg: 15 }}
            py={{ base: 10, md: 6, lg: 5 }}
          >
            More...
          </Button>
        </CardFooter>
      </Box>
    </Card>
  );
};

export default Newscard;
