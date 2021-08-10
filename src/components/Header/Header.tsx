import React from "react";
import styled from "styled-components";
import {SearchBar} from "./SearchBar";
import {BiCartAlt, BiUser} from "react-icons/bi";

const StyledHeader = styled.div`
  height: 5rem;
  display: flex;
  background-color: var(--color-primary);
  justify-content: space-around;
  align-items: center;
`

const Cart = styled.span`
  font-size: 2.5rem;
`
const User = styled.span`
  font-size: 2.5rem;
`
export const Header = () => {

    return (
        <StyledHeader>
            <SearchBar/>
            <Cart><BiCartAlt/></Cart>
            <User><BiUser    /></User>
        </StyledHeader>
    )
}