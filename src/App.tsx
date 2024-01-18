import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`,
          // lg: `"header" "main" "footer"`,
        }}
        gridTemplateRows={{
          base: "200px 1fr 500px",
          lg: "90px 1fr 295px",
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr",
        }}
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <GridItem area={"main"} bg={"darkgreen"}>
          <AppRoutes />
        </GridItem>
        <GridItem area={"footer"} bg={"green"}>
          <Footer
            pageLinks={["Home", "Products", "Trending", "About", "XXXX"]}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
