import { Image, Flex, Box } from "@chakra-ui/react";
import { Product } from "../../data/products";
import { Fragment, useEffect, useRef, useState } from "react";

interface Props {
  clickedProduct: string;
  modalIsVisible: boolean;
  setModalVisibility: (bool: boolean) => void;
}

const ProductModal = ({
  clickedProduct,
  modalIsVisible,
  setModalVisibility,
}: Props) => {
  const [isMounted, setIsMounted] = useState(modalIsVisible); //this state hook handles whether the modal is in the DOM, while modalIsVisible handles the opacity. Using only modalIsVisible to handle mounting state doesn't show transitions
  const pageLoadRef = useRef<HTMLDivElement>(null); ///

  useEffect(() => {
    if (!modalIsVisible) {
      setTimeout(() => {
        setIsMounted(false);
      }, 250); //wait 100 milliseconds after opacity is zero then unmount
    } else {
      setIsMounted(true);
    }
  });

  return (
    <>
      {/* if you have the whole returned comp as a conditional render, wrap it in <></> to atleast render empty <></> */}
      {isMounted && (
        <Fragment key={"product-modal"}>
          <Flex
            ref={pageLoadRef}
            position={"fixed"}
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={modalIsVisible ? 1 : 0}
            transition={"opacity 0.15s linear"}
            // onTransitionEnd={onTransitionEnd}
            onClick={() => setModalVisibility(false)}
            bg={"rgba(0,0,0,0.5)"}
            zIndex={50}
            //use other libs eg emotion & react-transition-group to create a smooth transition when disappearing instead of complicated code in this component
          >
            <Flex
              // bg={"gray"}
              h={"100%"}
              w={"100%"}
              align={"center"}
              justify={"center"}
              direction={"column"}
            >
              <Box boxSize={"300px"} bg={"blue"} children={clickedProduct} />
            </Flex>
          </Flex>
        </Fragment>
      )}
    </>
  );
};

export default ProductModal;
