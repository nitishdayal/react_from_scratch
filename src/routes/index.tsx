import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import DevTools from 'mobx-react-devtools';
import polished from 'polished';
import styled from 'styled-components';

import Hello from '../components/hello';
import Page2 from '../components/page2';
import Root from '../containers/root';
import Store from '../store/listItems';
import { NavWrapper, RouterWrapper, StyledLink } from '../styled';

const Routes = () => (
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
          render={() => <Page2 store={new Store()} />}
        />
        <Route
          exact={true}
          path="/"
          render={() => (<Hello bundler="Webpack" compiler="TypeScript" framework="(P?)React" />)}
        />
      </RouterWrapper>
      <DevTools />
    </Root>
  </Router>
);

export default Routes;
