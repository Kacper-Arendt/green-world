import React, {createContext, useReducer} from "react";
import {CartInitialType, ProductActions} from "../Models/CartContext";
import {CartReducers} from "./CartReducers";

const initialState = {
    products: []
}

export const CartContext = createContext<{ state: CartInitialType, dispatch: React.Dispatch<ProductActions> }>(
    {state: initialState, dispatch: () => null}
);

const reducer = ({products}: CartInitialType, action: ProductActions) => ({
    products: CartReducers(products, action)
})

export const Provider: React.FC = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}