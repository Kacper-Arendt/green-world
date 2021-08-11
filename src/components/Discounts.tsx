import styled from "styled-components";
import {Wrapper} from "./UI/WrapperEl";
import {Product} from "./Products/Product";
import {ProductsData} from "./Products/ProductsData";

const WrapperEl = styled(Wrapper)`
  h2 {
    color: black;
    font-size: 4rem;
  }
`

export const Discounts = () => {
    return (
        <WrapperEl>
            <h2>Discounts</h2>
            <Product
                id={ProductsData[2].id}
                name={ProductsData[2].name}
                alt={ProductsData[2].alt}
                img={ProductsData[2].img}
                price={ProductsData[2].price}
                per={ProductsData[2].per}
                newPrice={ProductsData[2].newPrice}
                discount={ProductsData[2].discount}
                />
        </WrapperEl>
    )
}