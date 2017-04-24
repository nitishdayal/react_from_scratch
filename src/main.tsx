import { normalize } from 'polished';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import Routes from './containers/routes';

let rootRender;

rootRender = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('content')
  );
};

const init = () => {
  // tslint:disable
  injectGlobal`${normalize()}`
  // tslint:enable

  if (process.env.preact) {
    console.log('PREACT BB');
    const render = require('preact').render;

    if (process.env.NODE_ENV !== 'production') {
      require('preact/devtools');
    }

    rootRender = (Component) => {
      render(
        <AppContainer>
          <Routes />
        </AppContainer>,
        document.body,
        rootRender);
    };
  }

  rootRender(Routes);

};

init();

if (module.hot) {
  module.hot.accept('./containers/routes', init);
}
