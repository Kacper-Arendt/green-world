import styled from 'styled-components';
import {Products} from "./Products";

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

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60% 6rem 1fr 4rem  4rem;
  grid-template-areas: 
  "img img img"
  "name . ."
  "line line line"
  "price . ."
  "btn btn btn";
  place-items: center;

  img {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    grid-area: name;
    font-size: 1.6rem;
    margin: 1.5rem 2rem 1rem;
  }

  p {
    grid-area: price;
    place-self: start;
    font-size: 1.4rem;
    margin: 1rem 2rem;

    span {
      font-weight: bold;
    }
  }
`

const Button = styled.button`
  grid-area: btn;
  width: 100%;
  height: 4rem;
  background-color: var(--color-primary);
  margin-top: auto;
  border: none;
  color: white;
  font-weight: bold;
`

const Line = styled.div`
  grid-area: line;
  width: 95%;
  height: .2rem;
  border-bottom: 1px solid #C5C5C5;
`

export const BestBuys = () => {
    return (
        <Wrapper>
            <h2>Best Buys</h2>
            <TopItems>
                {Products.map(el => (
                    <Item>
                        <img src={el.img} alt={el.alt}/>
                        <h3>{el.name}</h3>
                        <p><span>{el.price}</span>/{el.per}</p>
                        <Button>Add to cart</Button>
                    </Item>
                ))}
            </TopItems>
        </Wrapper>
    )
}