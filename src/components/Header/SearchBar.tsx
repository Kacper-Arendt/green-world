import styled from "styled-components";
import {FaSearch} from "react-icons/fa";

const Form = styled.form`
  width: 15rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 1rem;
  `

const Input = styled.input`
  width: 75%;
  height: 100%;
  border-radius: 3rem 0 0 3rem;
  border: 0;
  outline: 0;
  background-color: white;
  color: black;
  padding: .5rem 0 .5rem 1.5rem;
  font-size: inherit;
  font-weight: 600;
  letter-spacing: .07em;
  cursor: pointer;
`

const Button = styled.button`
  height: 100%;
  padding: .5rem 1.5rem;
  outline: 0;
  border-radius: 0 3rem 3rem 0;
  border: none;
  background-color: white;
  color: black;
  font-size: 1.3em;
  font-weight: 600;
  cursor: pointer;
`

export const SearchBar = () => {
    return (
        <Form>
            <Input type="text"/>
            <Button><FaSearch/></Button>
        </Form>
    )
}