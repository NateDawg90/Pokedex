import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    this.props.requestSinglePokemon(newProps.params.pokemonId);
  }

  render() {
    let details = this.props.pokemonDetail;
    let moves = details.moves;
    if (moves) {
      moves = moves.join(", ");
    }

    let items = details.items;
    if (items) {
      items = items.map((item, idx) => (
        <Link key={idx} to={`/pokemon/${details.id}/items/${idx}`}>
          <img src={item.image_url} />
        </Link>
      ));
    }

    return (
      <div>
        <img src={details.image_url} />
        <ul>
          <li>{details.name}</li>
          <li>Type: {details.poke_type}</li>
          <li>Attack: {details.attack}</li>
          <li>Defense: {details.defense}</li>
          <li>Moves: {moves}</li>
          <li>Items: {items}</li>
          <span>{this.props.children}</span>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
