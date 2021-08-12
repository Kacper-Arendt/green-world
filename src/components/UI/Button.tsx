import styled from "styled-components";
import React from "react";

interface IProps {
    value?: string,
    size?: string,
    backgroundColor?: string,
    onClick?: (e: React.SyntheticEvent) => void,
}

const ButtonEl = styled.button<IProps>`
  width: 100%;
  height: 4rem;
  margin-top: auto;
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
        >
            {props.value}
        </ButtonEl>)
}