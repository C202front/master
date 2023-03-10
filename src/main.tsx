import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import App from './App';
import { store } from './app/store';

const Button = styled.button`
  background-color: blue;
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: blueviolet;
  }
`;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
