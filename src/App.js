import Header from "./components/Header/Header";
import { Route, Routes} from "react-router-dom";
import ProductListing from "./components/ProductListing/ProductListing";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import IndividualProduct from "./components/IndividualProduct/IndividualProduct";
import Sizes from "./components/Sizes/Sizes";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" exact element={ProductDetail} />
        <Route path="/cart" exact element={Cart} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
