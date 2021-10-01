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

const Text = styled.p`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.5;
  background-color: var(--color-primary);
  color: white;
  font-size: 1.5rem;

@media${device.mobileM} {
  width: 30%;
  font-size: 2rem;
}
`

const ImageContainer = styled.div`
  width: 55%;
  height: 100%;
  position: relative;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    bottom: 10%;
    right: 5%;
    width: 40%;
    height: 3rem;
    max-width: 20rem;
  }

@media${device.mobileM} {
  width: 70%;
}
`

export const SeeAll = () => {
    return (
        <WrapperEl>
            <Text>Vegetables and Fruits from proven farmers</Text>
            <ImageContainer>
                <img
                    src="https://ik.imagekit.io/kacper/green-world/fruitsAndVegetables_gDaEXxPQ5.jpg?updatedAt=1629317073540"
                    alt="Fruits and vegetables on table"
                    loading='lazy'/>
                <Button backgroundColor='#A62940'>See All</Button>
            </ImageContainer>
        </WrapperEl>
    )
}