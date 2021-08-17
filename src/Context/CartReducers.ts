type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined ?
        { type: Key; }
        :
        {
            type: Key;
            payload: M[Key]
        }
};

export enum Types {
    Add = 'ADD_PRODUCT',
    Subtract = 'SUBTRACT_PRODUCT',
    Delete = 'DELETE_PRODUCT',
}

type ProductType = {
    id: number,
    name: string,
    amount: number,
}

type ProductPayload = {
    [Types.Add]: {
        id: number,
        name: string,
        amount: number
    },
    [Types.Subtract]: {
        id: number
    }
    [Types.Delete]: {
        id: number,
    }
}
export type ProductActions =
    ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const CartReducers = (state: ProductType[], action: ProductActions) => {
    const updatedCart = [...state];
    const productIndex = updatedCart.findIndex(value => value.id === action.payload.id)

    switch (action.type) {
        case Types.Add:
            if (productIndex < 0) {
                updatedCart.push(action.payload)
            } else {
                updatedCart[productIndex].amount = updatedCart[productIndex].amount + 1
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
        default:
            return state;
    }
}