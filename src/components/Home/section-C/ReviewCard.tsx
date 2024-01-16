import {
  Box,
  Card,
  CardBody,
  Text,
  useColorModeValue,
  Flex,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { Review } from "./sectionC";

const ReviewCard = ({ name, image, review }: Review) => {
  const bg = useColorModeValue("rgba(255,255,255,0.2)", "rgba(0,0,0,0.2)");
  const border = useColorModeValue("1px solid wheat", "1px solid black");

  return (
    <Card
      w={"100%"}
      maxW={{ sm: 1000, lg: 450 }}
      h={"100%"}
      borderRadius={{ base: 45, md: 20 }}
      bg={useColorModeValue("valaBlue.50", "valaBlue.900")}
      overflow={"hidden"}
      border={border}
      boxShadow={"2xl"}
    >
      <CardBody p={{ base: 14, sm: 5 }}>
        <Flex direction={"row"} mb={3}>
          <Avatar name={name} src={image} mr={3} />
          <Heading size={{ base: "4xl", sm: "lg" }}>{name}</Heading>
        </Flex>
        <Text
          fontSize={{ base: "40px", md: "30px", lg: "20px" }}
          noOfLines={{ base: 6, lg: 9, xl: 13 }}
        >
          {review}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
