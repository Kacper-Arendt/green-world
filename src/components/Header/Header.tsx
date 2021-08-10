import React from "react";
import styled from "styled-components";
import {SearchBar} from "./SearchBar";
import {BiCartAlt, BiUser} from "react-icons/bi";
import {main} from '../../images/images';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 50rem;
  background-image: url(${main});
  background-size: contain;
  background-position: center 5rem;
  background-repeat: no-repeat;

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
  svg{
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
        </StyledHeader>
    )
}