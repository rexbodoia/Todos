import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/store';
// import App from './components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

// window.receiveTodo = receiveTodo;
// window.receiveTodos = receiveTodos;

document.addEventListener("DOMContentLoaded", () => {
  const store  = configStore;
  window.store = store;
  window.allTodos = allTodos;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});
