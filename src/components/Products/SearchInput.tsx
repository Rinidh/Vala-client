import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchPopOver from "./SearchPopOver";
import { Product } from "./Products";
import { products as pdts } from "../../demoPdts";

interface Props {
  onSearch: (searchText: string) => void;
}

//I had to create 2 separate <Input>s inside <Show>s coz there is a bug -
//when I assign resposive values to Input's width ie {sm: --, lg: --} the width prop stops working

const SearchInput = function ({ onSearch }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  const inputLight = {
    color: "black",
    borderColor: "valaBlue.800",
    bg: "valaBlue.50",
    _focus: {
      //when clicked
      borderColor: "valaBlue.500",
    },
    _hover: {
      borderColor: "valaBlue.500",
    },
    _placeholder: { opacity: 0.7, color: "black" },
  };

  const inputDark = {
    color: "white",
    borderColor: "valaBlue.200",
    bg: "valaBlue.800",
    _focus: {
      borderColor: "valaBlue.500",
    },
    _hover: {
      borderColor: "valaBlue.500",
    },
    _placeholder: { opacity: 0.7, color: "white" },
  };

  const inputColorProps = useColorModeValue(inputLight, inputDark);

  return (
    <Flex direction={"column"} position={"relative"} mb={30}>
      <form //wrapped Input in a form to be able to submit it
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <Show
          breakpoint={
            "(min-width: 700px)"
          } /* shown above 700px width of screen */
        >
          <InputGroup color={"black"}>
            <InputLeftElement children={<BsSearch />} />
            <Input
              maxW={400}
              placeholder="Find products"
              variant={"outline"} //as custom defined in theme.ts
              {...inputColorProps}
              // errorBorderColor={"purple"} //purple if error in validation
            />
          </InputGroup>
        </Show>

        <Show breakpoint="(max-width: 700px)" /* shown below 700px width */>
          <Input
            //not using 'outine' variant coz of totally different sizes required
            w={1000}
            h={"100px"}
            pl={10}
            fontSize={"60px"}
            borderWidth={10}
            borderRadius={50}
            placeholder="Find products"
            // errorBorderColor={"purple"} //purple if error in validation
            {...inputColorProps}
          />
        </Show>
      </form>

      <SearchPopOver products={products} />
    </Flex>
  );
};

export default SearchInput;
