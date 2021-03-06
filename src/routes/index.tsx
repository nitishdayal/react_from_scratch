import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import DevTools from 'mobx-react-devtools';
import polished from 'polished';
import styled from 'styled-components';

import { NavWrapper, RouterWrapper, StyledLink } from '../components/styled';

import Root from '../components/containers/root';
import Hello from '../components/hello';
import Page2 from '../components/page2';

export default ({ store }) => (
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
          component={() => <Page2 store={store} />}
        />
        <Route
          exact={true}
          path="/"
          render={() => (<Hello bundler="Webpack" compiler="TypeScript" framework="(P?)React" />)}
        />
      </RouterWrapper>
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </Root>
  </Router>
);
