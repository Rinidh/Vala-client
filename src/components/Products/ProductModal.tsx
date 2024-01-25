import {
  Image,
  Flex,
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Product } from "../../data/products";
import logo from "../../assets/logo.png";
import { getProduct } from "../../utlis/getProduct";

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
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    if (!modalIsVisible) {
      setTimeout(() => {
        setIsMounted(false);
      }, 250); //wait 100 milliseconds after opacity is zero then unmount
    } else {
      setIsMounted(true);
    }
  });

  useEffect(() => {
    if (clickedProduct) {
      setProduct(getProduct(clickedProduct));
    }
  });

  return (
    <>
      {/* if you have the whole returned comp as a conditional render, wrap it in <></> to atleast render empty <></> */}
      {isMounted && (
        <Fragment key={"product-modal"}>
          <Flex
            position={"fixed"}
            top={0}
            bottom={0}
            left={0}
            right={0}
            opacity={modalIsVisible ? 1 : 0}
            transition={"opacity 0.15s linear"}
            zIndex={50}
            //use other libs eg emotion & react-transition-group to create a smooth transition when disappearing instead of complicated code in this component
          >
            <Flex h={"100%"} w={"100%"} bg={"rgba(0,0,0,0.5)"}>
              <Flex flex={1} onClick={() => setModalVisibility(false)}></Flex>

              <Flex w={"60%"} minW={300} py={10}>
                <Grid
                  h={"100%"}
                  w={"100%"}
                  borderRadius={20}
                  overflow={"hidden"}
                  templateRows="repeat(4, 1fr)"
                  templateColumns="repeat(4, 1fr)"
                  zIndex={60}
                  bg={useColorModeValue("white", "valaBlue.800")}
                >
                  <GridItem
                    rowSpan={{ base: 1, md: 3 }}
                    colSpan={{ base: 4, md: 2 }}
                    // bg={"darkred"}
                  >
                    <Flex align={"center"} justify={"center"} p={5}>
                      <Image
                        w={{ base: 700, md: 350 }}
                        objectFit="cover"
                        src={product.image ? product.image : logo} ///
                        alt="Dhokia Dharmesh"
                        border={"3px solid"}
                        borderRadius={20} //always round
                        mr={5}
                      />
                    </Flex>
                  </GridItem>
                  <GridItem
                    rowSpan={{ base: 2, md: 3 }}
                    colSpan={{ base: 4, md: 2 }}
                    p={5}
                    // bg={"darkgoldenrod"}
                  >
                    <Flex direction={"column"} h={"100%"}>
                      <Text
                        mb={3}
                        fontSize={{ base: 70, sm: 50, lg: 30 }}
                        fontWeight={"bold"}
                      >
                        {product.fullName}
                      </Text>

                      <Box flex={1} fontSize={{ base: 50, sm: 35, lg: 20 }}>
                        {product.description}
                      </Box>

                      <HStack
                        p={0}
                        h={{ base: 70, sm: 60, lg: 20 }}
                        // bg={"darkgoldenrod"}
                        justify={"space-between"}
                        fontSize={{ base: 30, sm: 30, lg: 17 }}
                      >
                        <Text>
                          Per box:
                          <br />
                          UGX {product.price}
                        </Text>
                        <Text>
                          Pack:
                          <br />
                          {product.qtyEachUnit} X {product.pack}
                        </Text>
                      </HStack>
                    </Flex>
                  </GridItem>
                  <GridItem
                    colSpan={4}
                    p={5}
                    borderTop={"2px solid"}
                    fontSize={{ base: 30, sm: 30, lg: 17 }}
                  >
                    Please contact us to directly buy factory outlet. <br />
                    We only sale cartons (boxes), and you may have not be able
                    to buy below minimum orders according to the product. <br />
                  </GridItem>
                </Grid>
              </Flex>

              <Flex flex={1} onClick={() => setModalVisibility(false)}></Flex>
            </Flex>
          </Flex>
        </Fragment>
      )}
    </>
  );
};

export default ProductModal;
