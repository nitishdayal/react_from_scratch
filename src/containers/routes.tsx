import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import polished from 'polished';
import styled from 'styled-components';

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
    font-variant: small-caps;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    width: 60px;

    &.active {
      color: white;
      font-variant: initial;
    }
`;

const RouterWrapper = styled.div`
  padding: 0 2em;
`;

export default () => (
  <Router>
    <Root>
      <NavWrapper>
        <StyledLink exact={true} to={'/'}>Page 1</StyledLink>
        {' | '}
        <StyledLink to={`/page2`}>Page 2</StyledLink>
      </NavWrapper>

      <RouterWrapper>
        <Route
          path="/page2"
          component={Page2}
        />
        <Route
          //tslint:disable
          exact={true}
          path="/"
          render={() => (<Hello bundler="Webpack" compiler="TypeScript" framework="(P?)React" />)}
        // tslint:enable
        />
      </RouterWrapper>
    </Root>
  </Router>
);
