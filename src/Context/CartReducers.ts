
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
    [Types.Delete]: {
        id: number,
    }
}
export type ProductActions =
    ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const CartReducers = (state: ProductType[], action: ProductActions) => {
    switch (action.type) {
        case Types.Add:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    amount: action.payload.amount,
                }
            ]
        case Types.Delete:
            return [
                ...state.filter(product => product.id !== action.payload.id),
            ]
        default:
            return state;
    }
}