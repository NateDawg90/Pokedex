import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// import { fetchAllPokemon } from './util/api_util';
import { requestAllPokemon } from './actions/pokemon_actions';


document.addEventListener('DOMContentLoaded', () => {
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
