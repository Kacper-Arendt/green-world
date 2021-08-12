import {Header} from "./Header/Header";
import {BestBuys} from "./BestBuys";
import {Discounts} from "./Discounts";
import {SeeAll} from "./SeeAll";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Homepage = () => {
    return (
        <Wrapper>
            <Header/>
            <BestBuys/>
            <Discounts/>
            <SeeAll/>
        </Wrapper>
    )
}