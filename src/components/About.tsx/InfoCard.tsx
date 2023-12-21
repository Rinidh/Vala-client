import { Card, CardBody, HStack, Box, Image, Text } from "@chakra-ui/react";

interface Props {
  image: string;
  info: string;
  name: string;
  role: string;
}

const InfoCard = ({ image, info, name, role }: Props) => {
  return (
    <Card maxW={800} borderRadius={"30px"}>
      <CardBody>
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
      <Box pl={10} mb={5}>
        <Text fontWeight={"bold"} fontSize={"larger"}>
          {name}
        </Text>
        <Text fontSize={"sm"}>{role}</Text>
      </Box>
    </Card>
  );
};

export default InfoCard;
