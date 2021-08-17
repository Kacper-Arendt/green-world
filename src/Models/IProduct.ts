export interface IProduct {
    id: number,
    name: string,
    alt: string,
    img: string,
    price: number,
    per: string
    newPrice?: number,
}

export interface IProductInCart extends IProduct {
    quantity: number,
    finalPrice: number
}