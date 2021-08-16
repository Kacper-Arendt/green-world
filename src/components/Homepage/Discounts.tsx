import styled from "styled-components";
import {Wrapper} from "../UI/WrapperEl";
import {Product} from "../Products/Product";
import {ProductsData} from "../Products/ProductsData";
import {Carousel} from "../UI/Carousel";

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
            <Carousel array={ProductsData}/>
        </WrapperEl>
    )
}