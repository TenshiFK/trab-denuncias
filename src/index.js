import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { modalsStore } from './Redux/modals.store';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

var rootReducer = combineReducers({ modalsStore })
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
