import {
  Text,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  VStack,
  useColorModeValue,
  Input,
  FormControl,
  FormHelperText,
  FormLabel,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useEmailPoster } from "../../hooks/useEmailPoster";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../utlis/emailRegex";
import SubscribeForm from "./SubscribeForm";

const SubscribeToNews = () => {
  const {
    fetchError,
    isPosting,
    responseData,
    resetDataPoster,
    triggerDataPost,
  } = useEmailPoster();

  return (
    <Card
      w={{ base: "100%", lg: "1000px" }}
      h={{ base: "830px", md: "500px", lg: "350px" }}
      mt={300}
      borderRadius={"30px"}
      bg={useColorModeValue("valaBlue.50", "valaBlue.800")}
      overflow={"hidden"}
    >
      {!fetchError && !responseData && !isPosting && (
        <SubscribeForm
          triggerDataPost={(data) =>
            triggerDataPost("/api/emails", data, () =>
              console.log("email post success")
            )
          }
        />
      )}
      {isPosting && (
        <Center h={"100%"}>
          <Spinner size={"xl"} />
        </Center>
      )}
      {fetchError && (
        <Center h={"100%"}>
          <Text fontSize={{ base: "70px", md: "45px", lg: "30px" }}>
            {fetchError}
          </Text>
        </Center>
      )}
      {responseData && (
        <Center h={"100%"}>
          <Text fontSize={{ base: "70px", md: "45px", lg: "30px" }}>
            {responseData}
          </Text>
        </Center>
      )}
    </Card>
  );
};

export default SubscribeToNews;
