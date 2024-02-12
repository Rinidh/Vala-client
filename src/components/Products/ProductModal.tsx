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
import CustomModal from "../CustomModal";

interface Props {
  clickedProduct: string;
  modalIsVisible: boolean;
  onCloseModal: () => void;
}

const ProductModal = ({
  clickedProduct,
  modalIsVisible,
  onCloseModal,
}: Props) => {
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    if (clickedProduct) {
      setProduct(getProduct(clickedProduct));
    }
  });

  return (
    <CustomModal
      modalIsVisible={modalIsVisible}
      onCloseModal={onCloseModal}
      name="product-modal"
    >
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
          We only sale cartons (boxes), and you may have not be able to buy
          below minimum orders according to the product. <br />
        </GridItem>
      </Grid>
    </CustomModal>
  );
};

export default ProductModal;
