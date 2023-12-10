import { Route, Routes } from "react-router-dom";
import X from "../components/X";
import No from "../components/No";
import Y from "../components/Y";
import Home from "../components/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="x" element={<X />}></Route>
      <Route path="y" element={<Y />}></Route>
      <Route path="*" element={<No />} />
    </Routes>
  );
};

export default AppRoutes;
