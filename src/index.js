import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/MainContainer.js';
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
