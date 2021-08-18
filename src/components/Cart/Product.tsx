import styled from "styled-components";
import {AiOutlineDelete} from "react-icons/ai";
import {IProductInCart} from "../../Models/CartContext";
import {device} from "../../Models/MediaQueries";

interface IProps {
    discount?: number,
}

const Wrapper = styled.div`
  width: 80%;
  max-width: 40rem;
  display: grid;
  margin: 2.5rem 0;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 5rem 5rem 3rem 1rem;
  grid-template-areas: 
  "img name name"
  "img price newPrice"
  "val  remove total"
  "line line line";
  place-items: center;

@media${device.tablet} {
  max-width: 70rem;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 6rem 1rem;
  grid-template-areas: 
          "img name price newPrice val remove total"
          "line line line line line line line";
  grid-column-gap: 1rem;
  margin: 1.5rem 0;
} 
`

const StyledImg = styled.img`
  grid-area: img;
  width: 100%;
  height: 80%;
  overflow: hidden;
  place-self: start;

@media${device.tablet} {
  place-self: center;
  height: 100%;
}
`

const StyledP = styled.p<IProps>`
  font-weight: bold;
  font-size: 1.4rem;
  white-space: nowrap;
  letter-spacing: 1.2px;
  text-decoration: ${(props) => props.discount && 'line-through'};

  :first-of-type {
    grid-area: name;
  }

  :nth-of-type(2) {
    grid-area: price;
    align-self: start;
    justify-self: end;
  }

  :nth-of-type(3) {
    grid-area: newPrice;
    align-self: start;
  }

  :nth-of-type(4) {
    grid-area: total;
    justify-self: end;
  }

@media${device.tablet} {
  :first-of-type{
    white-space: normal;
  }
  :nth-of-type(2) {
    align-self: center;
    justify-self: center;
  }

  :nth-of-type(3) {
    align-self: center;
  }
  }
`

const ChangeValue = styled.div`
  grid-area: val;
  display: flex;
  align-items: center;

  button {
    margin: 0 .5rem;
    width: 3rem;
    height: 3rem;
    border-radius: 20%;
    outline: none;
    border: 2px solid green;
    text-align: center;
    font-size: 2.2rem;
    background-color: transparent;
  }
`

const Remove = styled.button`
  grid-area: remove;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 2.5rem;
`

const Line = styled.div`
  grid-area: line;
  width: 100%;
  height: .2rem;
  margin-top: .7rem;
  border-bottom: .1rem solid black;
`

export const Product = (props: IProductInCart) => {
    return (
        <Wrapper key={props.id}>
            <StyledImg src={props.img}
                       alt={props.alt}/>
            <StyledP>{props.name}</StyledP>
            <StyledP discount={props.newPrice}>{props.price}$/{props.per}</StyledP>
            <StyledP>{props.newPrice && `${props.newPrice}$/${props.per}`}</StyledP>
            <ChangeValue>
                <button>+</button>
                <StyledP>{props.amount}</StyledP>
                <button>-</button>
            </ChangeValue>
            <StyledP>Total: {props.finalPrice} $</StyledP>
            <Remove><AiOutlineDelete/></Remove>
            <Line></Line>
        </Wrapper>
    )
}