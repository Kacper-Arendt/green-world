import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Homepage, Footer, Market, SearchBar} from './components/Components';
import {device} from './Models/MediaQueries';
import {NavBar} from "./components/Nav/NavBar";

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

  @media${device.tablet} {
    font-size: 71.25%;
  } @media${device.laptop} {
    font-size: 81.25%;
  } @media${device.desktop} {
    font-size: 91.25%;
  }
  }

  :root {
    --color-text: black;
    --color-background: #EFEFEF;
    --color-primary: #87A668;
    --color-secondary: #5E7348;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
    return (
        <>
            <GlobalStyles/>
            <Wrapper>
                <NavBar/>
                <Router>
                    <Switch>
                        <Route path='/market'>
                            <Market/>
                        </Route>
                        <Route path='/'>
                            <Homepage/>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </Wrapper>
        </>
    );
}

export default App;
