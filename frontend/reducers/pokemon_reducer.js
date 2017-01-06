import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, action.pokemon);
    case RECEIVE_NEW_POKEMON:
      let key = parseInt(action.pokemon.id)
      const newPoke = {key: action.pokemon};
      return merge({}, state, newPoke);
    default:
      return state;
  }
};

export default pokemonReducer;
