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
} from "@chakra-ui/react";

const SubscribeToNews = () => {
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
    <Flex>
      <Card
        w={{ base: "100%", lg: "1000px" }}
        mt={300}
        borderRadius={"30px"}
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

        <Box zIndex={1}>
          <CardHeader>
            <Heading fontSize={{ base: "90px", md: "70px", lg: "30px" }}>
              Subscribe to Latest Updates
            </Heading>
          </CardHeader>

          <CardBody px={5} minH={{ base: 350, md: 150, lg: 150 }}>
            <FormControl>
              <FormLabel fontSize={{ base: 40, md: 30, lg: 15 }} mb={10}>
                Please enter your email and you will receive the notifications
                at new posts and offers
              </FormLabel>
              <Input
                type="email"
                h={{ base: 150, sm: 100, lg: 10 }}
                w={"90%"}
                px={6}
                border={{ base: "6px solid", lg: "3px solid" }}
                borderRadius={{ base: 100, sm: 50, lg: 20 }}
                fontSize={{ base: 40, md: 30, lg: 15 }}
              />
              <FormHelperText fontSize={{ base: 40, md: 30, lg: 15 }}>
                We will never share your email
              </FormHelperText>
            </FormControl>
          </CardBody>

          <CardFooter justify={"end"}>
            <Button
              fontSize={{ base: 50, md: 30, lg: 15 }}
              px={{ base: 50, md: 30, lg: 15 }}
              py={{ base: 10, md: 6, lg: 5 }}
              colorScheme={colors.button}
              color={"white"}
            >
              Subscribe
            </Button>
          </CardFooter>
        </Box>
      </Card>
    </Flex>
  );
};

export default SubscribeToNews;
