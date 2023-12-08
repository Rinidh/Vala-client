import { Route, Routes } from "react-router-dom";
import Logo from "../components/Logo";
import X from "../components/X";
import No from "../components/No";
import Y from "../components/Y";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Logo />}></Route>
      <Route path="x" element={<X />}></Route>
      <Route path="y" element={<Y />}></Route>
      <Route path="*" element={<No />} />
    </Routes>
  );
};

export default AppRoutes;
