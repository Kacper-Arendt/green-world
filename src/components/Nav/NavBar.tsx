import React from "react";
import styled from "styled-components";
import {SearchBar} from "./SearchBar";
import {BiCartAlt, BiUser, BiHomeAlt} from "react-icons/bi";
import {Categories} from "./Categories";
import {useHistory} from 'react-router-dom';


const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const Bar = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  display: flex;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
`

const Icons = styled.span`
  font-size: 2.7rem;
  margin-left: auto;

  svg {
    margin-right: 2rem;
    cursor: pointer;
  }
`

export const NavBar = () => {
    const history = useHistory();

    return (
        <StyledHeader>
            <Bar>
                <SearchBar/>
                <Icons>
                    <BiHomeAlt onClick={() => history.push('/')}/>
                    <BiCartAlt onClick={() => history.push('/cart')}/>
                    <BiUser/>
                </Icons>
            </Bar>
            <Categories/>
        </StyledHeader>
    )
}