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
import { useManualLogin } from "../../hooks/useManualLogin";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

export interface LoginFormData {
  name_or_emailId: string;
  password: string;
}

interface Props {
  onAPICallError: (error: string) => void;
}

const LoginForm = ({ onAPICallError }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    responseData,
    isPosting,
    fetchError,
    triggerDataPost: triggerManualLogin,
  } = useManualLogin();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const { setLoggedInAdmin } = useAuth();

  const handleValidSubmit = (data: LoginFormData) => triggerManualLogin(data);

  useEffect(() => {
    if (!isPosting && fetchError) onAPICallError(fetchError);
    if (!isPosting && responseData) {
      setLoggedInAdmin(responseData);
      navigate("/admin");
    }
  }, [isPosting, fetchError, responseData]);

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
        <Heading
          size={{ base: "4xl", md: "xl" }}
          color={useColorModeValue("black", "white")}
        >
          Login to admin
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
            Name/Email
          </FormLabel>
          <Input
            {...register("name_or_emailId", {
              required: true,
              minLength: { value: 1, message: "Too short" },
              maxLength: { value: 50, message: "Too long" },
            })}
            {...inputDesignProps}
            placeholder="Name or Email"
            aria-label="Fill in a name or email to login"
          />
          {errors.name_or_emailId?.message ? (
            <FormHelperText
              color={"red"}
              fontSize={{ base: "30px", md: "10px", xl: "15px" }}
            >
              {errors.name_or_emailId?.message + "!"}
            </FormHelperText>
          ) : (
            <FormHelperText fontSize={{ base: "30px", md: "10px", xl: "15px" }}>
              Anything works if you have an account
            </FormHelperText>
          )}
        </FormControl>

        <FormControl mb={{ base: 10, lg: 3 }}>
          <FormLabel fontSize={{ base: "40px", md: "13px", xl: "20px" }}>
            Password
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
              aria-label="Fill in your account password"
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
              Fill in your password
            </FormHelperText>
          )}
        </FormControl>

        <Flex direction={"row"} justifyContent={"end"}>
          <Button
            variant={"customVariant"}
            px={{ base: 50, md: 30, lg: 15 }}
            py={{ base: 10, md: 6, lg: 5 }}
            type="submit"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default LoginForm;
