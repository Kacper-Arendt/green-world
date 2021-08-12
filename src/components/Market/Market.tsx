import styled from "styled-components";
import {ProductsData} from "../Products/ProductsData";
import {Product} from "../Products/Product";
import {device} from "../../Models/MediaQueries";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;
  background-color: #e2e2e2;
  
  h2 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2.5rem;
    width: 100%;
    padding: 2rem;
    background-color: #d5d5d5;
  }

@media${device.tablet} {
  flex-flow: row wrap;
}
@media${device.laptop} {
  width: 80%;
  align-self: center;
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