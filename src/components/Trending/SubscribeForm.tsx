import {
  CardHeader,
  Heading,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useEmailPoster } from "../../hooks/useEmailPoster";
import { emailRegex } from "../../utlis/emailRegex";

interface Props {
  triggerDataPost: (data: { email: string }) => void;
}

const SubscribeForm = ({ triggerDataPost }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<{ email: string }>();

  return (
    <form onSubmit={handleSubmit((data) => triggerDataPost(data))}>
      <CardHeader>
        <Heading fontSize={{ base: "90px", md: "70px", lg: "30px" }}>
          Subscribe to Latest Updates
        </Heading>
      </CardHeader>

      <CardBody px={5} minH={{ base: 350, md: 150, lg: 150 }}>
        <FormControl>
          <FormLabel fontSize={{ base: 40, md: 30, lg: 15 }} mb={10}>
            Please enter your email and you will receive the notifications of
            new posts and offers
          </FormLabel>
          <Input
            {...register("email", {
              pattern: {
                value: emailRegex,
                message: "Please enter a valid email",
              },
              required: true,
            })}
            type="email"
            placeholder="example@gmail.com"
            aria-label="Enter an email to subscribe to new posts"
            h={{ base: 150, sm: 100, lg: 10 }}
            w={"90%"}
            px={6}
            border={{ base: "6px solid", lg: "3px solid" }}
            borderRadius={{ base: 100, sm: 50, lg: 20 }}
            fontSize={{ base: 40, md: 30, lg: 15 }}
          />
          {errors.email?.message ? (
            <FormHelperText
              fontSize={{ base: 40, md: 30, lg: 15 }}
              color={"red"}
            >
              {errors.email?.message}
            </FormHelperText>
          ) : (
            <FormHelperText fontSize={{ base: 40, md: 30, lg: 15 }}>
              We will never share your email
            </FormHelperText>
          )}
        </FormControl>
      </CardBody>

      <CardFooter justify={"end"}>
        <Button
          variant={"customVariant"}
          type="submit"
          px={{ base: 50, md: 30, lg: 15 }}
          py={{ base: 10, md: 6, lg: 5 }}
        >
          Subscribe
        </Button>
      </CardFooter>
    </form>
  );
};

export default SubscribeForm;
