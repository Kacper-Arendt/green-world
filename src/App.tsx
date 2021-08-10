import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    width: 100%;
    height: 100%;
    background: var(--color-background);
  }

  :root {
    --color-text: black;
    --color-background: #EFEFEF;
    --color-primary: green;
  }
`

function App() {
    return (
        <div>
            <GlobalStyles/>
        </div>
    );
}

export default App;
