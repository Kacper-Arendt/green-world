import {tomatoes} from '../../images/images';
import { IProduct } from '../../Models/IProduct';

export const ProductsData: Array<IProduct> = [
    {
        id: 0,
        name: 'Tomatoes',
        price: 3,
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes',
    },
    {
        id: 1,
        name: 'Giant Tomatoes',
        price: 5,
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes',
        discount: true,
        newPrice: 3,
    },
    {
        id: 2,
        name: 'Raspberry Tomatoes',
        price: 4,
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes',
        newPrice: 2,
        discount: true,
    },
]