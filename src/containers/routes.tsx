import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import styled from 'styled-components';
import polished from 'polished';

import Hello from '../components/hello';
import Page2 from '../components/page2';
import Root from './root';


const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  background-color: steelblue;
  color: white;
  padding: .5em 0;
`;

const StyledLink = styled(NavLink) `
    color: lightgray;
    display: flex;
    font-family: Tahoma;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    width: 60px;

    &.active {
      color: white;
      font-variant: small-caps;
    }
`

const RouterWrapper = styled.div`
  padding: 0 2em;
`;

const Routes = () => (
  <Router>
    <Root>
      <NavWrapper>
        <StyledLink exact to={'/'}>Page 1</StyledLink>
        <span>|</span>
        <StyledLink to={`/page2`}>Page 2</StyledLink>
      </NavWrapper>

      <RouterWrapper>
        <Route
          path="/page2"
          component={Page2} />
        <Route
          exact path="/"
          render={() => (<Hello bundler="Webpack" compiler="TypeScript" framework="(P?)React" />)} />
      </RouterWrapper>
    </Root>
  </Router>
)

export default Routes;
