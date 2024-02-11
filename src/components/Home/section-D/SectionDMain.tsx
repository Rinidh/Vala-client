import {
  Image,
  Flex,
  Button,
  Link,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import locationMap from "../../../assets/location.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

const SectionD = () => {
  const mapUrl =
    "https://www.google.com/maps/place/VALA+(U)+LTD/@0.4362641,33.2142165,17z/data=!3m1!4b1!4m6!3m5!1s0x177e7b8b000c1fe3:0x87f78ec48c4952d6!8m2!3d0.4362641!4d33.2167968!16s%2Fg%2F11rt_46lj0?authuser=0&entry=ttu";

  //tried to center the button in middle of map
  // useEffect(() => {
  //   const mapDiv = document.getElementById("map-div");
  //   const mapDivWidth = mapDiv?.offsetWidth;
  //   console.log(mapDivWidth); //weird values are logging

  //   const button = document.getElementById("map-div-button");
  //   if (button && mapDivWidth) button.style.left = `${mapDivWidth / 2}px`;
  // }, []);

  return (
    <>
      <Heading
        size={{ base: "4xl", md: "3xl" }}
        px={10}
        pt={40}
        color={useColorModeValue("black", "white")}
      >
        Find us here...
      </Heading>
      <Flex px={10} pb={100} pt={7}>
        <Box
          h={{ base: 800, lg: 600 }}
          position="relative"
          id="map-div"
          as={Link}
          href={mapUrl}
          isExternal
          // border={"2px solid"}
        >
          <Image
            src={locationMap}
            objectFit={"contain"}
            borderRadius={50}
            maxW={{ lg: 800, xl: 1000 }}
          />
          <Button
            // fontSize={{ base: 50, md: 30, lg: 15 }}
            px={{ base: 50, md: 30, lg: 15 }}
            py={{ base: 10, md: 6, lg: 5 }}
            variant={"customVariant"}
            borderRadius={{ base: 20, sm: 10 }}
            position={"absolute"}
            top={30}
            left={10}
            // id="map-div-button"
          >
            Open in Maps <FaExternalLinkAlt style={{ marginLeft: "20px" }} />
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default SectionD;
