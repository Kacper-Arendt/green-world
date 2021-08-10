import React from "react";
import styled from "styled-components";
import {SearchBar} from "./SearchBar";
import {BiCartAlt, BiUser} from "react-icons/bi";
import {main} from '../../images/images';
import {Categories} from "./Categories";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 50rem;


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

const Image = styled.div`
  height: 25rem;
  width: 100%;
  background-image: url(${main});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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