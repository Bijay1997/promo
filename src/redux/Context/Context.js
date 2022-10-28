// import {createContext, useReducer} from 'react';
// import React from 'react'
// import {cartReducer} from "../../redux/reducers/productReducer";
// import {useSelector} from "react-redux";
// const Cart = createContext();
// const Context = ({children}) => {
//     const products = useSelector((state) => state.allProducts.products);

//     const [state, dispatch] = useReducer(cartReducer, {
//         products: products,
//         cart:[]
//     })
//   return (
//     <Cart.Provider value={{ state, dispatch}}>{children}</Cart.Provider>
//   )
// }

// export default Context