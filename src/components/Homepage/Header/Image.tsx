import React from "react";
import styled from "styled-components";
import {main} from '../../../images/images';

const Wrapper = styled.div`
  height: 25rem;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(77, 77, 77, .5)), url(${main});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

const Header = styled.h3`
  position: absolute;
  top: 23%;
  left: 2%;
  font-size: 3rem;
  text-transform: uppercase;
  color: white;
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
`

const TextTransparent = styled.div`
  position: absolute;
  bottom: 2%;
  left: 2%;
  font-size: 1.5rem;
  color: white;
`

export const Image = () => {
    return (
        <Wrapper>
            <Header>Exclusive prices</Header>
            <TextOnBlack><p>Buy local products with code <span>#EatBetter</span></p></TextOnBlack>
            <TextTransparent><p>From 1st August to 30th September</p></TextTransparent>
        </Wrapper>
    )
}