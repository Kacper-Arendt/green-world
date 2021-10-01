import React from "react";
import styled from "styled-components";
import {device} from "../../../Models/MediaQueries";

const Wrapper = styled.div`
  place-self: center;
  height: 25rem;
  width: 100%;
  position: relative; 
  display: flex;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  
    }
  
@media${device.tablet} {
  height: 35rem;
} @media${device.laptop} {
  height: 40rem;
  width: 90%;
  max-width: 160rem;
}
`

const Header = styled.h3`
  position: absolute;
  top: 23%;
  left: 2%;
  font-size: 3rem;
  text-transform: uppercase;
  color: white;

@media${device.laptop} {
  left: 30%;
}
`

const TextOnBlack = styled.div`
  position: absolute;
  top: 40%;
  left: 7%;
  background-color: rgba(0, 0, 0, .9);
  color: white;
  padding: 1rem;
  border-radius: 10rem;

  p {
    text-transform: capitalize;
    font-size: 1.5rem;
  }

@media${device.laptop} {
  left: 35%;
}
`

const TextTransparent = styled.div`
  position: absolute;
  bottom: 2%;
  left: 2%;
  font-size: 1.5rem;
  color: white;

@media${device.laptop} {
  bottom: 40%;
  left: 45%;
}
`

export const Image = () => {
    return (
        <Wrapper>
            <img loading='lazy' src="https://ik.imagekit.io/kacper/green-world/main_9IC6k3TYy1.jpg?updatedAt=1629317073547" alt=""/>
            <Header>Exclusive prices</Header>
            <TextOnBlack><p>Buy local products with code <span>#EatBetter</span></p></TextOnBlack>
            <TextTransparent><p>From 1st August to 30th September</p></TextTransparent>
        </Wrapper>
    )
}