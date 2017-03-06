import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<h1>smiling is sometimes wroth it and sometimes worth it</h1>, root);

  window.store = store;
  window.allTodos = allTodos;
});
