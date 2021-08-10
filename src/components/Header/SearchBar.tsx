import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import { device } from "../../Models/MediaQueries";

const Form = styled.form`
  width: 15rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-left: auto;

@media${device.tablet} {
width: 25rem;
}
`

const Input = styled.input`
  width: 100%;
  padding: 1rem 3.5rem 1rem 1.5rem;
  border: none;
  border-radius: 10rem;
  outline: none;
`

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: -3.3rem;
`

export const SearchBar = () => {
    return (
        <Form>
            <Input type="text"/>
            <Button><FaSearch/></Button>
        </Form>
    )
}