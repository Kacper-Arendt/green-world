import {IProductInCart, ProductActions} from "../Models/CartContext";

export enum Types {
    Add = 'ADD_PRODUCT',
    Subtract = 'SUBTRACT_PRODUCT',
    Delete = 'DELETE_PRODUCT',
    Increase = 'INCREASE_PRODUCT',
}

export const CartReducers = (state: IProductInCart[], action: ProductActions) => {
    const updatedCart = [...state];
    const productIndex = updatedCart.findIndex(value => value.id === action.payload.id)

    switch (action.type) {
        case Types.Add:
            if (productIndex < 0) {
                updatedCart.push(action.payload)
            } else {
                updatedCart[productIndex].amount = updatedCart[productIndex].amount + 1;
                updatedCart[productIndex].finalPrice =
                    updatedCart[productIndex].finalPrice + updatedCart[productIndex].price;
            }
            return updatedCart;
        case Types.Subtract:
            if (state[action.payload.id].amount > 1) {
                updatedCart[productIndex].amount = updatedCart[productIndex].amount - 1
            } else {
                updatedCart.filter(el => el.id !== action.payload.id)
            }
            return updatedCart
        case Types.Delete:
            return [
                ...state.filter(product => product.id !== action.payload.id),
            ]
        case Types.Increase:
            updatedCart[productIndex].amount = updatedCart[productIndex].amount + 1;
            updatedCart[productIndex].finalPrice =
                updatedCart[productIndex].finalPrice + updatedCart[productIndex].price;
            return updatedCart;
        default:
            return state;
    }
}