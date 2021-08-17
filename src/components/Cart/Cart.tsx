import styled from "styled-components";
import {Product} from "./Product";
import {ProductsData} from "../Products/ProductsData";
import { Summary } from "./Summary";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2{
    font-size: 2rem;
    padding: 1rem;
  }
`

export const Cart = () => {
    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {ProductsData.map((el, key) => {
                    if (el.newPrice) {
                        return (
                            <Product
                                key={key}
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
                    } else {
                        return null
                    }
                }
            )}
            <Summary totalPrice={164} totalProducts={22}/>
        </Wrapper>
    )
}