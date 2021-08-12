import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Header, BestBuys, Discounts, SeeAll} from './components/Components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    width: 100%;
    height: 100%;
    background: var(--color-background);
    height: 400vh;
  }

  :root {
    --color-text: black;
    --color-background: #EFEFEF;
    --color-primary: #87A668;
    --color-secondary: #5E7348;
  }
`
const Wrapper = styled.div`

`

function App() {
    return (
        <>
            <GlobalStyles/>
            <Wrapper>
                <Header/>
                <BestBuys/>
                <Discounts/>
                <SeeAll />
            </Wrapper>
        </>
    );
}

export default App;
