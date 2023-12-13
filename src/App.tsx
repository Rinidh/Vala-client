import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import BodyRoutes from "./routes/BodyRoutes";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          lg: `"header" "main" "footer"`,
        }}
        gridTemplateRows={{
          base: "100px 1fr 295px",
          lg: "100px 1fr 295px",
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr",
        }}
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <GridItem area={"main"} bg={"yellow"}>
          <BodyRoutes />
        </GridItem>
        <GridItem area={"footer"} bg={"green"}></GridItem>
      </Grid>
    </>
  );
};

export default App;
