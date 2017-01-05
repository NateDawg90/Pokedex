import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    this.props.requestSinglePokemon(newProps.params.pokemonId);
  }

  render() {
    let moves = this.props.pokemonDetail.moves;
    if (moves) {
      moves = moves.join(", ");
    }

    let items = this.props.pokemonDetail.items;
    if (items) {
      items = items.map((item, idx) => (
        <img key={idx} src={item.image_url} />
      ));
    }
    return (
      <div>
        <img src={this.props.pokemonDetail.image_url} />
        <ul>
          <li>{this.props.pokemonDetail.name}</li>
          <li>Type: {this.props.pokemonDetail.poke_type}</li>
          <li>Attack: {this.props.pokemonDetail.attack}</li>
          <li>Defense: {this.props.pokemonDetail.defense}</li>
          <li>Moves: {moves}</li>
          <li>Items: {items}</li>

        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
