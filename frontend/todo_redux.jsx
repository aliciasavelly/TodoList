import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');

  ReactDOM.render(<h1>smiling is sometimes wroth it and sometimes worth it</h1>, root);

});
