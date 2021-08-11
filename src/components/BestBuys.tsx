import styled from 'styled-components';
import {Product} from "./Products/Product";
import {Products} from "./Products/Products";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  row-gap: 3rem;

  h2 {
    color: black;
    font-size: 4rem;
  }
`

const TopItems = styled.div`
  width: 23rem;
  height: 35rem;
  display: flex;
  overflow: hidden;

  background-color: white;
`

export const BestBuys = () => {
    return (
        <Wrapper>
            <h2>Best Buys</h2>
            <TopItems>
                <Product
                    id={Products[0].id}
                    name={Products[0].name}
                    img={Products[0].img}
                    alt={Products[0].alt}
                    price={Products[0].price}
                    per={Products[0].per}
                />
            </TopItems>
        </Wrapper>
    )
}