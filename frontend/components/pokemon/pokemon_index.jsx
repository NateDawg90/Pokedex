import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const allPokemon = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));

    return (
      <div>
        <ul>
          {allPokemon}
        </ul>
        <span>{this.props.children}</span>
      </div>
    );
  }
}

export default PokemonIndex;
