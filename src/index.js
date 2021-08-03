import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import { store } from './store';

import { DefaultStyle } from "./glossy/default";

ReactDOM.render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
      <DefaultStyle />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
