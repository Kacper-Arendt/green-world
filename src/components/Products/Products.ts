import {tomatoes} from '../../images/images';
import { IProduct } from '../../Models/IProduct';

export const Products: Array<IProduct> = [
    {
        id: 1,
        name: 'Tomatoes',
        price: 3,
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes'
    },
    {
        id: 2,
        name: 'Giant Tomatoes',
        price: 5,
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes'
    },
    {
        id: 3,
        name: 'Cherry Tomatoes',
        price: 4,
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes'
    },
]