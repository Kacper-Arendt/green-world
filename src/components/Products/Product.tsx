import styled from "styled-components";
import {IProduct} from "../../Models/IProduct";

interface IPrice{
    discount?: number
}

const Item = styled.div<IPrice>`
  width: 23rem;
  height: 35rem;
  margin: 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60% 6rem 1fr 4rem  4rem;
  grid-template-areas: 
  "img img img"
  "name name name"
  "line line line"
  "price newPrice ."
  "btn btn btn";
  place-items: center;

  background-color: white;

  img {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    grid-area: name;
    justify-self: start;
    font-size: 1.6rem;
    margin: 1.5rem 2rem 1rem;
    white-space: nowrap;
  }
`
const Line = styled.div`
  grid-area: line;
  width: 95%;
  height: .2rem;
  border-bottom: 1px solid #C5C5C5;
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

const Price = styled.p`
  place-self: start;
  font-size: 1.5rem;
  margin: 1rem 2rem;

  span {
    font-weight: bold;
  }
`


const NormalPrice = styled(Price)<IPrice>`
  grid-area: price;
  justify-self: start;
  text-decoration:${(props) => props.discount && 'line-through'};
`

const NewPrice = styled(Price)<IPrice>`
  grid-area: newPrice;
  justify-self: start;
  color: ${(props) => props.discount && 'green'};
`

export const Product = (props: IProduct) => {
    return (
        <Item key={props.id} >
            <img src={props.img} alt={props.alt}/>
            <h3>{props.name}</h3>
            <Line/>
            <NormalPrice discount={props.newPrice}><span>{props.price}$</span>/{props.per}</NormalPrice>
            {props.newPrice &&
            <NewPrice discount={props.newPrice}><span>{props.newPrice}$</span>/{props.per}</NewPrice>
            }
            <Button>Add to cart</Button>
        </Item>
    )
}