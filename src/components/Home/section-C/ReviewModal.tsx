import React, { useEffect, useState } from "react";
import CustomModal from "../../CustomModal";
import {
  Box,
  Center,
  Heading,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { apiClient } from "../../../services/apiClient";

interface Props {
  modalIsVisible: boolean;
  onCloseModal: () => void;
  reviewText: string;
  onSubmit: () => void;
}

interface ReviewFormData {
  //note that review-form data doesn't contain the reviewText which is passed down from parent (Review.tsx)
  name: string;
  email: string;
}
type ReviewToSubmit = ReviewFormData & { reviewText: string }; //the obj type that's actually posted

const ReviewModal = ({
  modalIsVisible,
  onCloseModal,
  reviewText,
  onSubmit,
}: Props) => {
  const [isPosting, setIsPosting] = useState(false);
  const [response, setResponse] = useState();
  const [error, setError] = useState();

  const [formData, setFormData] = useState<ReviewFormData>(
    {} as ReviewFormData
  ); //as useForm() doesn't directly provide the current obj with field values
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ReviewFormData>();

  //preferred NOT to make a separate hook for the simple review-posting (eg useReviewPoster)
  const handleValidSubmit = async (data: ReviewToSubmit) => {
    console.log(data); ///
    // setIsPosting(true);
    // const res = await apiClient.post("/api/reviews", data);
    // console.log("review post res: ", res);
  };
  if (reviewText) handleValidSubmit({ ...formData, reviewText });

  //using basic email validation logic
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const inputDesignProps = {
    variant: "outline",
    fontSize: { base: "40px", md: "13px", xl: "20px" },
    h: { base: "100px", md: "60px" },
    borderColor: useColorModeValue("valaBlue.900", "valaBlue.50"),
    _hover: { borderColor: "rgba()" },
  };

  return (
    <CustomModal
      modalIsVisible={modalIsVisible}
      onCloseModal={onCloseModal}
      name="review-modal"
    >
      <Box position={"relative"}>
        <Center mb={{ base: 35, md: 18 }}>
          <Heading size={{ base: "4xl", md: "xl" }}>
            Thank you for your feedback
          </Heading>
        </Center>

        {isPosting && (
          <Center position={"absolute"} boxSize={"100%"} bg={"rgba(0,0,0,0,5)"}>
            <Spinner size={"xl"} />
          </Center>
        )}

        <form
          onSubmit={handleSubmit((data) => {
            //first the onSubmit notifies the parent, the parent sends the reviewText and then handleValidSubmit runs
            onSubmit();
            setFormData(data);
          })}
        >
          <FormControl mb={{ base: 10, lg: 3 }}>
            <FormLabel fontSize={{ base: "40px", md: "13px", xl: "20px" }}>
              Name
            </FormLabel>
            <Input
              {...register("name", {
                required: true,
                pattern: {
                  value: /^[^@]+$/,
                  message: "@ symbol is prohibited in Name",
                },
                minLength: { value: 1, message: "Name too short" },
                maxLength: { value: 50, message: "Too long" },
              })}
              {...inputDesignProps}
              placeholder="Name"
              aria-label="Fill in a name to create an admin account"
            />
            {errors.name?.message ? (
              <FormHelperText
                color={"red"}
                fontSize={{ base: "30px", md: "10px", xl: "15px" }}
              >
                {errors.name?.message + "!"}
              </FormHelperText>
            ) : (
              <FormHelperText
                fontSize={{ base: "30px", md: "10px", xl: "15px" }}
              >
                What would you like us to call you...
              </FormHelperText>
            )}
          </FormControl>

          <FormControl mb={{ base: 10, lg: 3 }}>
            <FormLabel fontSize={{ base: "40px", md: "13px", xl: "20px" }}>
              Email
            </FormLabel>
            <Input
              {...register("email", {
                pattern: {
                  value: emailRegex, //validate directly with react-hook-form
                  message: "Please enter a valid email",
                },
                required: true,
              })}
              {...inputDesignProps}
              type="email"
              placeholder="example@yahoo.com"
              aria-label="Provide an email address"
            />
            {errors.email?.message ? (
              <FormHelperText
                color={"red"}
                fontSize={{ base: "30px", md: "10px", xl: "15px" }}
              >
                {errors.email?.message + "!"}
              </FormHelperText>
            ) : (
              <FormHelperText
                fontSize={{ base: "30px", md: "10px", xl: "15px" }}
              >
                We'll never share your email
              </FormHelperText>
            )}
          </FormControl>

          <Flex direction={"row"} justifyContent={"end"}>
            <Button
              colorScheme="valaBlue"
              type="submit"
              borderRadius={{ base: 20, md: 10 }}
              fontSize={{ base: 50, md: 30, lg: 15 }}
              px={{ base: 50, md: 30, lg: 15 }}
              py={{ base: 10, md: 6, lg: 5 }}
            >
              Save Review
            </Button>
          </Flex>
        </form>
      </Box>
    </CustomModal>
  );
};

export default ReviewModal;
