import { values } from 'lodash';

export const selectAllPokemon = ({ pokemon }) => values(pokemon);

export const selectPokemonItem = (state, itemId) => {
  let items = state.pokemonDetail.items;
  if (items) {
    return state.pokemonDetail.items[itemId];
  }
  return {};
};
