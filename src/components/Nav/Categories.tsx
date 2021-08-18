import styled from "styled-components"
import {fruits, sale, vegetables} from '../../images/images'
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
    background-image: url(${vegetables});
  }

  :nth-of-type(2) {
    background-image: url(${fruits});
  }

  :nth-of-type(3) {
    background-image: url(${sale});
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