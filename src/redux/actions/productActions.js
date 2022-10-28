import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
export const filterProducts = (size) => {
    return {
        type: ActionTypes.FILTER_PRODUCTS_BY_SIZE,
        payload: {size: size,}
    }
}
// export const AddToCart = (product) => {
//     return {
//         type: ActionTypes.ADD_TO_CART,
//         payload: product,
//     }
// }
// export const RemoveFromCart = (product) => {
//     return {
//         type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//         payload: product,
//     }
// }