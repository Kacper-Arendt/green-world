import styled from "styled-components";
import React from "react";

interface IProps {
    size?: string,
    backgroundColor?: string,
    onClick?: (e: React.SyntheticEvent) => void,
    children: string
}

const ButtonEl = styled.button<IProps>`
  width: 100%;
  height: 4rem;
  border: none;
  color: white;
  font-weight: bold;
  font-size: ${(props: IProps) => props.size ? props.size : 'inherit'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'var(--color-primary)'};
`

export const Button = (props: IProps) => {
    return (
        <ButtonEl
            size={props.size}
            onClick={props.onClick}
            backgroundColor={props.backgroundColor}
        >
            {props.children}
        </ButtonEl>)
}