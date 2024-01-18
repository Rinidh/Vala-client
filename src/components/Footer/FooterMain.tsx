import {
  Box,
  Center,
  HStack,
  Text,
  Link,
  SimpleGrid,
  VStack,
  Show,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import logo from "../../assets/logo.png";

interface Props {
  pageLinks: string[];
}

const Footer = ({ pageLinks }: Props) => {
  const lowerCased = pageLinks.map((link) => {
    return link.replace(/[A-Z]/g, (match) => match.toLowerCase());
  });

  const links = lowerCased.map((link) => (link === "home" ? "" : link));
  //replace the 'home' with empty '' coz home is at index route not at '/home'

  // const socialMediaIcons = ["FaFacebook", "IoLogoWhatsapp", "BiLogoGmail", "BsTwitterX"]
  // failed to find a technique for mapping from array: <{socialMediaIcons[0]}  /> ???

  return (
    <Box
      // paddingLeft={{ base: 5, md: 20, lg: 15 }}
      // paddingTop={{ base: 25, lg: "40px" }}
      // paddingRight={{ base: 5, md: 20, lg: 25 }}
      bg={useColorModeValue("valaBlue.50", "valaBlue.800")}
      h={"100%"}
      w={"100%"}
    >
      <SimpleGrid h={"100%"} columns={3}>
        <Box>
          <VStack>
            {links.map((link, index) => (
              <Box
                key={index}
                as={Text}
                m={2}
                textAlign={"left"}
                fontSize={{ base: 50, md: 30, lg: 15 }}
              >
                <Link href={`/${link}`}>{pageLinks[index]}</Link>
              </Box>
            ))}
          </VStack>
        </Box>

        <Center>
          <Image
            src={logo}
            boxSize={{ base: "150px", md: "200px" }}
            objectFit={"contain"}
          />
        </Center>

        <Flex direction={"column"} justify={"center"}>
          <Text mr={10} fontSize={{ base: 50, md: 30, lg: 15 }}>
            Contact Us
          </Text>

          <Show above="sm">
            <HStack>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <IoLogoWhatsapp style={{ height: "30px", width: "30px" }} />
              </Box>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <FaFacebook style={{ height: "30px", width: "30px" }} />
              </Box>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <BiLogoGmail style={{ height: "30px", width: "30px" }} />
              </Box>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <BsTwitterX style={{ height: "30px", width: "30px" }} />
              </Box>
            </HStack>
          </Show>

          <Show below="sm">
            <HStack>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <IoLogoWhatsapp style={{ height: "70px", width: "70px" }} />
              </Box>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <FaFacebook style={{ height: "70px", width: "70px" }} />
              </Box>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <BiLogoGmail style={{ height: "70px", width: "70px" }} />
              </Box>
              <Box opacity={0.7} _hover={{ opacity: 1 }}>
                <BsTwitterX style={{ height: "70px", width: "70px" }} />
              </Box>
            </HStack>
          </Show>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
