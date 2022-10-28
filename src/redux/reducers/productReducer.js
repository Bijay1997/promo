import { ActionTypes } from "../constants/actionTypes";

const initialState = { products: [], filteredProducts: [], size: "" };

export const productReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload, filteredProducts: payload };
    case ActionTypes.FILTER_PRODUCTS_BY_SIZE:
      return { ...state, size: payload.size };
      case ActionTypes.ADD_TO_CART:
      return { ...state, products: payload, filteredProducts: payload, qty:1 };
      
    
    default:
      return state;
  }
};//filter product by size = previous size + new size
// create new action to remove the selected size

// export const cartReducer = (state,action) => {
//   switch (action.type) {


//     default:
//       return state;
//   }
// }
