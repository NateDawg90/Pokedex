import React from 'react';

class PokemonIndexItem extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.pokemon.name}</span>
        <img src={this.props.pokemon.image_url} />
      </li>
    );
  }
}

export default PokemonIndexItem;
