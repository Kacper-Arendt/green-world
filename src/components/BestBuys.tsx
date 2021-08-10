import styled from 'styled-components';
import {tomatoes} from '../images/images';

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
  width: 25rem;
  height: 30rem;

  background-color: white;
`

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    background-color: #fff;
  }

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }

  h3 {
    font-size: 1.6rem;
    justify-self: center;
    place-self: start;
    margin: 1.5rem 2rem 1rem;
  }

  p {
    place-self: start;
    font-size: 1.4rem;
    margin: 1rem 2rem;

    span {
      font-weight: bold;
    }
  }
`

const Button = styled.button`
  width: 100%;
  height: 4rem;
  background-color: var(--color-primary);
  margin-top: auto;
  border: none;
  
  
  :hover{
    
  }
`

const Line = styled.div`
  width: 95%;
  height: .2rem;
  border-bottom: 1px solid #C5C5C5;
`

export const BestBuys = () => {
    return (
        <Wrapper>
            <h2>Best Buys</h2>
            <TopItems>
                <Item>
                    <img src={tomatoes} alt=""/>
                    <h3>Tomatoes</h3>
                    <Line/>
                    <p><span>3$</span>/1kg</p>
                    <Button>Add to cart</Button>
                </Item>
            </TopItems>
        </Wrapper>
    )
}