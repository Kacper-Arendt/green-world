import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { Header } from './components/Components';
import {BestBuys} from "./components/BestBuys";

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
  }
`
const Wrapper = styled.div`

`

function App() {
    return (
        <>
            <GlobalStyles/>
            <Wrapper>
                <Header />
                <BestBuys />
            </Wrapper>
        </>
    );
}

export default App;
