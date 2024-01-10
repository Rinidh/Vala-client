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
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Flex justify={"end"} mb={30}>
      <Flex direction={"column"} position={"relative"}>
        <form //wrapped Input in a form to be able to submit it
          onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
          }}
        >
          <InputGroup w={400} color={"black"}>
            <InputLeftElement children={<BsSearch />} />
            <Input
              borderRadius={20}
              placeholder="Find products"
              variant={"outline"} //as custom defined in theme.ts
              // errorBorderColor={"purple"} //purple if error in validation
              _placeholder={{ opacity: 0.5, color: "blue" }}
            ></Input>
          </InputGroup>
        </form>
        <SearchPopOver products={products} />
      </Flex>
    </Flex>
  );
};

export default SearchInput;
