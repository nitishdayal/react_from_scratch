import { normalize } from 'polished';
import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import Routes from './containers/routes';

function init() {
  // tslint:disable
  injectGlobal`${normalize()}`
  // tslint:enable
  render(<Routes />, document.getElementById('content'));
}

init();

if (module.hot) {
  module.hot.accept('./containers/routes', init);
}
