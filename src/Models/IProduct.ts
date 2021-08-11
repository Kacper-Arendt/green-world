export interface IProduct {
    id: number,
    name: string,
    alt: string,
    img: string,
    price: number,
    per: string
    discount?: boolean,
    newPrice?: number,
}