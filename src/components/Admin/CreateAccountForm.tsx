import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
  Heading,
  Center,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useAccountCreator from "../../hooks/useAccountCreator";
import { randomNumber } from "../../utlis/helperFunctions";

export interface CreateAccountFormData {
  name: string;
  emailId: string;
  password: string;
}

interface Props {
  onAPICallError: (error: string) => void;
  onSubmitSuccess: () => void; //should run when the server has responded with status 200
}

const CreateAccountForm = ({ onSubmitSuccess, onAPICallError }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { responseData, isPosting, fetchError, triggerAccountCreation } =
    useAccountCreator();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateAccountFormData>();

  const handleValidSubmit = (data: CreateAccountFormData) =>
    triggerAccountCreation(data);

  useEffect(() => {
    if (!isPosting && fetchError) onAPICallError(fetchError);
    if (!isPosting && responseData) onSubmitSuccess();
  });

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
    <Box position={"relative"}>
      <Center mb={{ base: 35, md: 18 }}>
        <Heading size={{ base: "4xl", md: "xl" }}>
          Create an admin account
        </Heading>
      </Center>

      {isPosting && (
        <Center position={"absolute"} boxSize={"100%"} bg={"rgba(0,0,0,0,5)"}>
          <Spinner size={"xl"} />
        </Center>
      )}

      <form onSubmit={handleSubmit(handleValidSubmit)}>
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
            <FormHelperText fontSize={{ base: "30px", md: "10px", xl: "15px" }}>
              A name to use as administrator
            </FormHelperText>
          )}
        </FormControl>

        <FormControl mb={{ base: 10, lg: 3 }}>
          <FormLabel fontSize={{ base: "40px", md: "13px", xl: "20px" }}>
            Email
          </FormLabel>
          <Input
            {...register("emailId", {
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
          {errors.emailId?.message ? (
            <FormHelperText
              color={"red"}
              fontSize={{ base: "30px", md: "10px", xl: "15px" }}
            >
              {errors.emailId?.message + "!"}
              {/* ---.message to show the pre-set message while registering */}
            </FormHelperText>
          ) : (
            <FormHelperText fontSize={{ base: "30px", md: "10px", xl: "15px" }}>
              We'll never share your email
            </FormHelperText>
          )}
        </FormControl>

        <FormControl mb={{ base: 10, lg: 3 }}>
          <FormLabel fontSize={{ base: "40px", md: "13px", xl: "20px" }}>
            Create a Password
          </FormLabel>
          <InputGroup>
            <Input
              {...register("password", {
                required: true,
                minLength: { value: 3, message: "Password too short" },
                maxLength: { value: 50, message: "Too long" },
              })}
              {...inputDesignProps}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              aria-label="Make a strong password"
            />
            <InputRightElement
              alignItems={"center"}
              justifyContent={"center"}
              h={"100%"}
              pl={10}
              pr={10}
            >
              <IconButton
                bg={"none"}
                fontSize={{ base: "70px", sm: "65px", lg: "20px" }}
                aria-label={"show password"}
                icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                _hover={{ bg: "none" }}
                onClick={() => setShowPassword((original) => !original)}
              />
            </InputRightElement>
          </InputGroup>
          {errors.password?.message ? (
            <FormHelperText
              color={"red"}
              fontSize={{ base: "30px", md: "10px", xl: "15px" }}
            >
              {errors.password?.message + "!"}
            </FormHelperText>
          ) : (
            <FormHelperText fontSize={{ base: "30px", md: "10px", xl: "15px" }}>
              Create a strong password
            </FormHelperText>
          )}
        </FormControl>

        <Flex direction={"row"} justifyContent={"end"}>
          <Button
            variant={"customVariant"}
            px={{ base: 50, md: 30, lg: 15 }}
            py={{ base: 10, md: 6, lg: 5 }}
            // type="submit"
            onClick={() => {
              //only for quick live testing purposes
              const num = randomNumber();
              triggerAccountCreation({
                name: `demo${num}`,
                emailId: `demo@${num}`,
                password: `${num}`,
              });
            }}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default CreateAccountForm;
