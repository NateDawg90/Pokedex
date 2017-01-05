import React from 'react';
import { Link } from 'react-router';

class PokemonIndexItem extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          <span>{this.props.pokemon.name}</span>
          <img src={this.props.pokemon.image_url} />
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
