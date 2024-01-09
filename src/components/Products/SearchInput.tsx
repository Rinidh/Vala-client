import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import SearchPopOver from "./SearchPopOver";
import { Product } from "./Products";
import { products as pdts } from "../../demoPdts";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = function ({ onSearch }: Props) {
  const [products, setProducts] = useState<Product[]>([...pdts]);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Flex direction={"column"} justify={"end"}>
      <form //wrapped Input in a form to be able to submit it
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup w={400} color={"black"}>
          <InputLeftElement children={<BsSearch />} />
          <Input
            // ref={ref}
            // borderRadius={10}
            // placeholder="XXXXX"
            variant={"outline"} //as custom defined in theme.ts
            // fontFamily={"Courier New"}
            // errorBorderColor={"purple"} //purple if error in validation
            // size={"md"}
            // maxWidth={"800px"}
            // borderColor={"ActiveBorder"}
            // focusBorderColor="green.400"
            // _placeholder={{ opacity: 1, color: "gray" }}
          ></Input>
        </InputGroup>
      </form>

      <SearchPopOver products={products} />
    </Flex>
  );
};

export default SearchInput;
