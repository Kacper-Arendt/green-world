import styled from "styled-components";
import {AiOutlineDelete} from "react-icons/ai";
import {IProductInCart} from "../../Models/IProduct";

interface IProps {
    discount?: number,
}

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  margin: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 5rem 5rem 3rem 1rem;
  grid-template-areas: 
  "img name name"
  "img price newPrice"
  "add  remove total"
  "line line line";
  place-items: center;
`

const StyledImg = styled.img`
  grid-area: img;
  width: 100%;
  height: 80%;
  overflow: hidden;
  place-self: start;
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
`

const StyledDiv = styled.div`
  grid-area: add;
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
            <StyledDiv>
                <button>+</button>
                <StyledP>{props.quantity}</StyledP>
                <button>-</button>
            </StyledDiv>
            <StyledP>Total: {props.finalPrice} $</StyledP>
            <Remove><AiOutlineDelete/></Remove>
            <Line></Line>
        </Wrapper>
    )
}