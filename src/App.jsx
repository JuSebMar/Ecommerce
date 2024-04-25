import { AuthProvider } from "./auth/authContext";
import { CartProvider } from "./common/context/CartContext";
import { ProductProvider } from "./common/context/ProductsContext";
import { AppRouter } from "./router/AppRouter";

const App = () => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ProductProvider>
            <AppRouter />
          </ProductProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
};
export default App;
