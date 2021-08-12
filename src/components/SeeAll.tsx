import styled from "styled-components"
import {Wrapper} from "./UI/WrapperEl";
import {fruitsAndVegetables} from "../images/images";

const WrapperEl = styled(Wrapper)`
  width: 100%;
  height: 15rem;
  flex-direction: row;
`

const CategoryContainer = styled.div`
  width: 45%;
  height: 100%;
  background-color: var(--color-primary);
  display: flex;
  place-items: center;

  p {
    text-align: center;
    line-height: 1.5;
    padding: .5rem;
    color: white;
    font-size: 1.5rem;
  }
`

const Image = styled.div`
  width: 55%;
  height: 100%;
  background-image: url(${fruitsAndVegetables});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  place-items: end;
  justify-content: end;

  button {
    margin: 1rem;
    padding: .5rem 1rem;
  }
`

export const SeeAll = () => {
    return (
        <WrapperEl>
            <CategoryContainer>
                <p>Vegetables and Fruits from proven farmers </p>
            </CategoryContainer>
            <Image>
                <button>See All</button>
            </Image>
        </WrapperEl>
    )
}