import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/createStore';

import App from './app.jsx';

export const AppProvider = ({ store }) => {
  return <Provider store={store}>
              <App />
          </Provider>;
}

render(<AppProvider store={store} />, document.getElementById('app-root'));
