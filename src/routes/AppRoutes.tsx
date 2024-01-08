import { Route, Routes } from "react-router-dom";
import X from "../components/X";
import No from "../components/No";
import Y from "../components/Y";
import Home from "../components/Home";
import About from "../components/About";
import News from "../components/Trending/News";
import Tabs from "../components/Trending/Tabs";
import Offers from "../components/Trending/Offers";
import Products from "../components/Products/Products";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="x" element={<X />}></Route>
        <Route path="y" element={<Y />}></Route>

        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/trending" element={<Tabs />}>
          <Route index element={<News />} />
          <Route path="offers" element={<Offers />} />
        </Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="*" element={<No />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
