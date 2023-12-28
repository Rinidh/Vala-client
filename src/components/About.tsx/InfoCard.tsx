import {
  Card,
  CardBody,
  HStack,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  image: string;
  info: string;
  name: string;
  role: string;
}

const InfoCard = ({ image, info, name, role }: Props) => {
  const bg = useColorModeValue("rgba(255,255,255,0.2)", "rgba(0,0,0,0.2)");
  const border = useColorModeValue("1px solid wheat", "1px solid black");

  return (
    <>
      <Card
        maxW={800}
        borderRadius={"30px"}
        bg={"transparent"}
        overflow={"hidden"}
        border={border}
      >
        <Box
          position={"absolute"}
          backdropFilter={"blur(23px)"}
          height={"100%"}
          w={"100%"}
          bg={bg}
        />
        <CardBody zIndex={1}>
          <HStack>
            <Image
              boxSize="240px"
              objectFit="cover"
              src={image} ///
              alt="Dhokia Dharmesh"
              borderRadius={"50%"} //always round
              mr={5}
            />
            <Text fontSize={"larger"}>{info}</Text>
          </HStack>
        </CardBody>
        <Box pl={10} mb={5} zIndex={1}>
          <Text fontWeight={"bold"} fontSize={"larger"}>
            {name}
          </Text>
          <Text fontSize={"sm"}>{role}</Text>
        </Box>
      </Card>
    </>
  );
};

export default InfoCard;
