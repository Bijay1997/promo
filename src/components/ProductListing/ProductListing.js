import React, { useEffect } from "react";
import axios from "axios";
import "./ProductListing.css";
import { useSelector, useDispatch } from "react-redux";
import IndividualProduct from "../IndividualProduct/IndividualProduct";
import { setProducts, filterProducts } from "../../redux/actions/productActions";

import Sizes from "../Sizes/Sizes";

const ProductListing = () => {
  const sizes = useSelector((state) => state.allProducts.size);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(
        "https://react-shopping-cart-67954.firebaseio.com/products.json?fbclid=IwAR1B7JrSzAvjGQsWUtPa-9r8fQFS0FTzw8sCmyCKnaRjZccwDJoT2NujGAk"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data.products));
    dispatch(filterProducts(response.data.products));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  console.log(sizes);

  const filterProducts =
    sizes === ""
      ? products
      : products.filter(
          (a) => a.availableSizes.indexOf(sizes.toUpperCase()) >= 0
        );
  return (
    <div className="container">
      <div className="AvailableSizes">
        {" "}
        <Sizes />
      </div>
      <div className="listed-products">
        <p>{filterProducts.length} Product(s) found </p>
        {filterProducts.map((product) => (
           <IndividualProduct product={product} key={product.id} /> 
        ))}



      </div>
    </div>
  );
};

export default ProductListing;
