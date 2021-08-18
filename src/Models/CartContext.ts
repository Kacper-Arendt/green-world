import {Types} from "../Context/CartReducers";
import {IProduct} from "./IProduct";

export interface CartInitialType {
    products: IProductInCart[],
}

export interface IProductInCart extends IProduct {
    amount: number,
    finalPrice: number
}

export type ProductPayload = {
    [Types.Add]: {
        id: number,
        name: string,
        alt: string,
        img: string,
        price: number,
        per: string
        newPrice?: number,
        amount: number,
        finalPrice: number
    },
    [Types.Subtract]: {
        id: number
    }
    [Types.Delete]: {
        id: number,
    }
    [Types.Increase]: {
        id: number,
    }
}

export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined ?
        { type: Key; }
        :
        {
            type: Key;
            payload: M[Key]
        }
};

export type ProductActions =
    ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];