import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import { fetchAllPokemon } from './util/api_util';
// import { requestAllPokemon } from './actions/pokemon_actions';
// import { selectAllPokemon } from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
