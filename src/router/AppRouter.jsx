import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../common/layout/AppLayout";
import { OneProductPage } from "../pages/OneProductPage";
import { HomePage } from "../pages/HomePage.jsx";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { QuienSomosPage } from "../pages/QuienSomosPage";
import { CartPage } from "../pages/CartPage.jsx";
import { ProductCategories } from "../components/ProductCategories.jsx";
import { FavoritesPage } from "../pages/FavoritesPage.jsx";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppLayout />}>
          <Route path="*" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="newuser" element={<RegisterPage />} />
          <Route path="quien" element={<QuienSomosPage />} />
          <Route path="cart/:id" element={<OneProductPage />} />
          <Route path="cartpage" element={<CartPage />} />
          <Route path="categories/:category" element={<ProductCategories />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
