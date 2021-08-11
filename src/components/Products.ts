import {tomatoes} from '../images/images';


interface IProject {
    id: number,
    name: string,
    price: string,
    per: string
    img: string,
    alt: string,
}

export const Products: Array<IProject> = [
    {
        id: 1,
        name: 'Tomatoes',
        price: '3$',
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes'
    },
    {
        id: 2,
        name: 'Giant Tomatoes',
        price: '5$',
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes'
    },
    {
        id: 3,
        name: 'Cherry Tomatoes',
        price: '4$',
        per: 'kg',
        img: tomatoes,
        alt: 'tomatoes'
    },
]