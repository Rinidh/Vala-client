import {
  Card,
  CardBody,
  HStack,
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
  const bg = useColorModeValue("rgba(255,255,255,0.4)", "rgba(0,0,0,0.4)");
  const border = useColorModeValue("1px solid wheat", "1px solid black");
  const button = useColorModeValue("valaRed", "valaBlue");

  return (
    <>
      <Card
        maxW={450}
        borderRadius={"30px"}
        bg={"transparent"}
        overflow={"hidden"}
        border={border}
      >
        <Box
          //provides the blurred background
          position={"absolute"}
          backdropFilter={"blur(23px)"}
          height={"100%"}
          w={"100%"}
          bg={bg}
        />

        <Box zIndex={1}>
          <CardHeader>
            <Heading>{heading}</Heading>
          </CardHeader>

          <CardBody p={0}>
            <VStack justify={"start"}>
              <Image h={200} w={"100%"} objectFit="cover" src={image} />
              <Box minH={100} w={"90%"}>
                <Text fontSize={"larger"}>{info}</Text>
              </Box>
            </VStack>
          </CardBody>

          <CardFooter justify={"end"}>
            <Button colorScheme={button} color={"white"}>
              More...
            </Button>
          </CardFooter>
        </Box>
      </Card>
    </>
  );
};

export default Newscard;
