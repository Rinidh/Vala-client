import { Container } from "@chakra-ui/react";
import SearchInput from "./Products/SearchInput";

const X = () => {
  return (
    <>
      <Container bg={"orange"} h={40} w={40} children="X" />
      <SearchInput onSearch={(pdt) => console.log("search: ", pdt)} />
    </>
  );
};

export default X;
