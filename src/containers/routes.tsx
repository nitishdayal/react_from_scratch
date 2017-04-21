import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Hello from '../components/hello';
import Page2 from '../components/page2';
import Root from './root';

const Routes = () => (
  <Router>
    <Root>
      <Link to={`/`}>Page 1</Link>
      {' '}
      <Link to={`/page2`}>Page 2</Link>

      <hr />

      <Route
        exact path="/"
        component={() => (<Hello bundler="Webpack" compiler="TypeScript" framework="React" />)}
      />
      <Route path="/page2" component={Page2} />
    </Root>
  </Router>
)

export default Routes;
