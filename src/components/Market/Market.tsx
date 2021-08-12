import styled from "styled-components";
import {ProductsData} from "../Products/ProductsData";
import {Product} from "../Products/Product";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    width: 100%;
    padding: 2rem;
    background-color: #fff;
  }
`

export const Market = () => {
    return (
        <Wrapper>
            <h2>Market</h2>
            {ProductsData.map(el => {
                return (
                    <Product
                        id={el.id}
                        name={el.name}
                        img={el.img}
                        alt={el.alt}
                        price={el.price}
                        per={el.per}
                        newPrice={el.newPrice}
                    />
                )
            })}
        </Wrapper>
    )
}