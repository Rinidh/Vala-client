import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
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

  return (
    <Flex justify={"end"} mb={30}>
      <Flex direction={"column"} position={"relative"}>
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
                w={400}
                borderRadius={20}
                placeholder="Find products"
                variant={"outline"} //as custom defined in theme.ts
                // errorBorderColor={"purple"} //purple if error in validation
                _placeholder={{ opacity: 0.5, color: "blue" }}
              />
            </InputGroup>
          </Show>

          <Show breakpoint="(max-width: 700px)" /* shown below 700px width */>
            <Input
              w={1000}
              h={"100px"}
              fontSize={"60px"}
              borderRadius={20}
              placeholder="Find products"
              variant={"outline"} //as custom defined in theme.ts
              // errorBorderColor={"purple"} //purple if error in validation
              _placeholder={{ opacity: 0.5, color: "blue" }}
            />
          </Show>
        </form>
        <SearchPopOver products={products} />
      </Flex>
    </Flex>
  );
};

export default SearchInput;
