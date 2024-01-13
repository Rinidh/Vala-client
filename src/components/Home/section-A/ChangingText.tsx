import { Text, SlideFade, useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface Props {
  duration: 2500 | 3000 | 3500 | 4000 | 4500;
  texts: string[];
}

const ChangingText = ({ duration, texts }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setVisible] = useState(true);
  const { colorMode } = useColorMode();

  const gradient =
    colorMode === "dark"
      ? "linear(to-r, valaBlue.200, valaBlue.600)"
      : "linear(to-r, orange.400, valaRed.400)";

  useEffect(() => {
    let fadeOutTimeout: number;
    let fadeInTimeout: number; //the clearout id returned by setTimeout is a number

    fadeOutTimeout = setTimeout(() => {
      setVisible(false);

      fadeInTimeout = setTimeout(() => {
        setVisible(true);

        if (currentIndex === texts.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }, 500);

      // return () => clearTimeout(fadeInTimeout); //useless to return inside a setTimeout() call, it's not captured
    }, duration);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(fadeInTimeout);
    };
  }, [currentIndex, texts.length]);

  return (
    <SlideFade in={isVisible}>
      <Text
        fontSize={{ base: "170px", lg: "110px" }}
        fontFamily={"Fredoka"}
        bgGradient={gradient}
        bgClip={"text"}
        display={"inline-block"}
        lineHeight={"normal"}
      >
        {texts[currentIndex]}
      </Text>
    </SlideFade>
  );
};

export default ChangingText;
