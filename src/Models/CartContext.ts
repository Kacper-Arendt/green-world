
export interface CartInitialType {
    products: IProduct[],
}

export interface IProduct {
    id: number,
    name: string
    amount: number,
}