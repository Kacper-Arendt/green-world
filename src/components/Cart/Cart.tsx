import styled from "styled-components";
import {Product} from "./Product";
import {ProductsData} from "../Products/ProductsData";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Cart = () => {
    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {ProductsData.map(el => {
                if (el.newPrice) {
                    return (
                        <Product
                            quantity={13}
                            finalPrice={33}
                            id={el.id}
                            name={el.name}
                            alt={el.alt}
                            img={el.img}
                            price={el.price}
                            per={el.per}
                            newPrice={el.newPrice}
                        />
                    )
                }
            })}
        </Wrapper>
    )
}