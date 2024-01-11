import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";

interface Props {
  heading: string;
  image?: string;
  info?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ heading, image, info, onClose, isOpen }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{heading}</ModalHeader>
        <ModalCloseButton />

        <ModalBody p={0}>
          <Grid
            h={470}
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(4, 1fr)"
            gap={1}
          >
            <GridItem rowSpan={3} colSpan={2} bg="tomato">
              <Flex align={"center"}>
                {image && (
                  <Image
                    w="100%"
                    objectFit="cover"
                    src={image} ///
                    alt="Dhokia Dharmesh"
                    borderRadius={10} //always round
                    mr={5}
                  />
                )}
              </Flex>
            </GridItem>
            <GridItem rowSpan={3} colSpan={2} bg="green">
              {info}
              info...
            </GridItem>
            <GridItem colSpan={4} bg="yellow">
              XXXX
            </GridItem>
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="valaBlue" mr={3} onClick={onClose}>
            View Sellers
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
