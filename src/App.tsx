import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header/HeaderMain";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main" "footer"`, //from base all the way upto lg, use that templateAreas value
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

      {/* <PageLoadSpinner show={isLoading} /> */}
    </>
  );
};

export default App;
