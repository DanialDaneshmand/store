import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;
