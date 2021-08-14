import React from "react";
import styled from "styled-components";
import {Image} from "./Image";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 30rem;
`

export const Header = () => {

    return (
        <StyledHeader>
            <Image/>
        </StyledHeader>
    )
}