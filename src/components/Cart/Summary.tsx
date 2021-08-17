import styled from "styled-components";
import { device } from "../../Models/MediaQueries";
import {Button} from "../UI/Button";

const Wrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 2rem 0 0;
  display: flex;
  flex-flow: row wrap;
  background-color: var(--color-background);

  p {
    flex: 1 40%;
    margin: 1rem;
    font-size: 1.5rem;

    :nth-of-type(2), :nth-of-type(4) {
      text-align: end;
    }
  }

@media${device.tablet} {
    margin: 2rem 0;
    max-width: 50rem;
}
`

interface IProps {
    totalProducts: number,
    totalPrice: number
}

export const Summary = (props: IProps) => {
    return (
        <Wrapper>
            <p>Total Products:</p>
            <p>{props.totalProducts}</p>
            <p>Total Price: </p>
            <p>{props.totalPrice}$</p>
            <Button size='1.5rem'>Pay</Button>
        </Wrapper>
    )
}