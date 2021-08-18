import styled from "styled-components"
import {useHistory} from "react-router-dom";

const StyledCategories = styled.div`
  height: 15rem;
  width: 90%;
  place-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
`

const Category = styled.div`
  height: 10rem;
  width: 8rem;
  background-color: #574659;
  border: 2px solid white;
  border-radius: 1rem;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  :first-of-type {
    background-image: 
            url('https://ik.imagekit.io/kacper/green-world/vegetables_OFGFc3M14y.jpg?updatedAt=1629317073574');
  }

  :nth-of-type(2) {
    background-image: 
            url('https://ik.imagekit.io/kacper/green-world/fruits_8PGEyUses.jpg?updatedAt=1629317072982');
  }

  :nth-of-type(3) {
    background-image:
            url('https://ik.imagekit.io/kacper/green-world/sale_DBv3o_ygr.jpg?updatedAt=1629317073220');
  }
`

export const Categories = () => {
    const history = useHistory();

    return (
        <StyledCategories>
            <Category onClick={() => history.push('/market')}/>
            <Category onClick={() => history.push('/market')}/>
            <Category onClick={() => history.push('/market')}/>
        </StyledCategories>
    )
}