import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import './assets/scss/main.scss'

import Users from "./views/components/users";


export default function App() {
  
  return (
    <>
      <Provider store={store}>
        <Users/>
      </Provider>
    </>
  );
}