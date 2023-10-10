
// index.js
import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider, createStoreHook } from 'react-redux';
import { createStore } from 'redux'
import placeReducer from './src/reducer/placeReducer';
const store = createStore(placeReducer)
const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);