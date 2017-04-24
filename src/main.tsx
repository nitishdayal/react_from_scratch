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


// tslint:disable
injectGlobal`${normalize()}`


if (process.env.preact && process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}
// tslint:enable

rootRender(Routes);


if (module.hot) {
  module.hot.accept('./containers/routes', () => { rootRender(Routes); });
}
