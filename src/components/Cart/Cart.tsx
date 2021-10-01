import styled from "styled-components";
import {Product} from "./Product";
import {Summary} from "./Summary";
import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

const Wrapper = styled.div`
  min-height: 90vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    padding: 1rem;
  }
`

export const Cart = () => {
    const {state} = useContext(CartContext);

    return (
        <Wrapper>
            <h2>Shopping Cart</h2>
            {state.products.map((el) => {
                    return (
                        <Product
                            key={el.id}
                            finalPrice={el.finalPrice}
                            id={el.id}
                            name={el.name}
                            alt={el.alt}
                            img={el.img}
                            price={el.price}
                            per={el.per}
                            newPrice={el.newPrice}
                            amount={el.amount}
                        />
                    )
                }
            )}
            <Summary totalPrice={0} totalProducts={0}/>
        </Wrapper>
    )
}