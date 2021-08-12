import React from "react";
import styled from "styled-components";
import {SearchBar} from "./SearchBar";
import {BiCartAlt, BiUser} from "react-icons/bi";
import {Categories} from "./Categories";
import {Image} from "./Image";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 30rem;
`

const Bar = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
`

const Icons = styled.span`
  font-size: 2.7rem;
  margin-left: auto;

  svg {
    margin-right: 2rem;
  }
`

export const Header = () => {

    return (
        <StyledHeader>
            <Bar>
                <SearchBar/>
                <Icons>
                    <BiCartAlt/>
                    <BiUser/>
                </Icons>
            </Bar>
            <Categories/>
            <Image/>
        </StyledHeader>
    )
}