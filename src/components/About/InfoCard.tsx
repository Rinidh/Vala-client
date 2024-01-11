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
        maxW={{ sm: 1000, lg: 800 }}
        // h={{ md: "390px", lg: "350px", xl: "390px" }}
        borderRadius={30}
        bg={"transparent"}
        overflow={"hidden"}
        border={border}
      >
        <Box
          position={"absolute"}
          backdropFilter={"blur(25px)"}
          height={"100%"}
          w={"100%"}
          bg={bg}
        />
        <CardBody zIndex={1}>
          <HStack>
            <Image
              boxSize={{ md: "260px", lg: "190px", xl: "240px" }}
              objectFit="cover"
              src={image} ///
              alt="Dhokia Dharmesh"
              borderRadius={"50%"} //always round
              mr={5}
            />
            <Text
              fontSize={{ base: "40px", lg: "20px" }}
              noOfLines={{ base: 6, lg: 9, xl: 13 }}
            >
              {info}
            </Text>
          </HStack>
        </CardBody>
        <Box pl={10} zIndex={1}>
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "55px", sm: "40px", lg: "20px" }}
          >
            {name}
          </Text>
          <Text fontSize={{ base: "50px", md: "25px", lg: "15px" }}>
            {role}
          </Text>
        </Box>
      </Card>
    </>
  );
};

export default InfoCard;
