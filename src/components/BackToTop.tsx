import { Button, IconButton, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScoll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScoll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //smooth scrolling to top not working
    });
  };

  return (
    <IconButton
      isRound
      icon={<BsArrowUp />}
      variant={"solid"}
      colorScheme={useColorModeValue("valaRed", "valaBlue")}
      fontSize={{ base: "100px", sm: "60px", lg: "30px" }}
      boxSize={{ base: "140px", sm: "90px", lg: "50px" }}
      opacity={isVisible ? 1 : 0}
      transition={"all ease 0.3s"}
      position="fixed"
      bottom={10}
      right={10}
      zIndex={100}
      aria-label="back to top of page button"
      onClick={handleClick}
    />
  );
};

export default BackToTop;
