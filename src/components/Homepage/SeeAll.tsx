import styled from "styled-components"
import {Wrapper} from "../UI/WrapperEl";
import {Button} from "../UI/Button";
import {device} from "../../Models/MediaQueries";

const WrapperEl = styled(Wrapper)`
  width: 100%;
  height: 18rem;
  flex-direction: row;
  margin-bottom: 5rem;
  align-self: center;
  max-width: 100rem;
@media${device.mobileM} {
  width: 80%;
}
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

@media${device.mobileM} {
  width: 30%;

  p {
    font-size: 2rem;
  }
}
`

const Image = styled.div`
  width: 55%;
  height: 100%;
  background-image:
          url('https://ik.imagekit.io/kacper/green-world/fruitsAndVegetables_gDaEXxPQ5.jpg?updatedAt=1629317073540');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  place-items: end;
  justify-content: end;

  button {
    margin: 1rem;
    width: 50%;
    height: 3rem;
    max-width: 25rem;
  }
@media${device.mobileM} {
  width: 70%;
}
`

export const SeeAll = () => {
    return (
        <WrapperEl>
            <CategoryContainer>
                <p>Vegetables and Fruits from proven farmers </p>
            </CategoryContainer>
            <Image>
                <Button backgroundColor='#A62940'>See All</Button>
            </Image>
        </WrapperEl>
    )
}