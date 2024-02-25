import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import X from "../components/X";
import No from "../components/No";
import Y from "../components/Y";
import Home from "../components/Home";
import About from "../components/About";
import News from "../components/Trending/News";
import Tabs from "../components/Trending/Tabs";
import Offers from "../components/Trending/Offers";
import Products from "../components/Products";
import PageLoadSpinner from "../PageLoadSpinner";
import AuthProvider from "../components/Auth/AuthProvider";
import RequireAuth from "../components/Auth/RequireAuth";

//lazy loaded components
const LoginSignUp = lazy(() => import("../components/Admin/LoginSignUp"));
const Admin = lazy(() => import("../components/Admin"));

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="x" element={<X />}></Route>
        <Route path="y" element={<Y />}></Route>

        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/trending" element={<Tabs />}>
          <Route index element={<News />} />
          <Route path="offers" element={<Offers />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            <Suspense
            // fallback={<PageLoadSpinner show={isLoading} />}
            >
              <LoginSignUp />
            </Suspense>
          }
        />

        <Route
          path="/admin"
          element={
            <Suspense fallback={"Loading Admin..."}>
              <RequireAuth>
                <Admin />
              </RequireAuth>
            </Suspense>
          }
        />

        <Route path="*" element={<No />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
