import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { requestSinglePokemon, receivePokemon } from './actions/pokemon_actions';
import { fetchSinglePokemon } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.requestSinglePokemon = requestSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.receivePokemon = receivePokemon;
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
