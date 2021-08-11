import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  row-gap: 3rem;

  h2 {
    color: black;
    font-size: 4rem;
  }
`

export const WrapperEl = () => {
    return (
        <Wrapper>
        </Wrapper>
    )
}