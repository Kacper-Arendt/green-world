import styled from 'styled-components';
import {Product} from "./Products/Product";
import {ProductsData} from "./Products/ProductsData";
import {Wrapper} from './UI/WrapperEl';

const WrapperEl = styled(Wrapper)`
  h2 {
    color: black;
    font-size: 4rem;
  }
`

export const BestBuys = () => {
    return (
        <WrapperEl>
            <h2>Best Buys</h2>
            <Product
                id={ProductsData[0].id}
                name={ProductsData[0].name}
                img={ProductsData[0].img}
                alt={ProductsData[0].alt}
                price={ProductsData[0].price}
                per={ProductsData[0].per}
            />
        </WrapperEl>
    )
}