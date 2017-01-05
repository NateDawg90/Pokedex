import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    this.props.requestSinglePokemon(newProps.params.pokemonId);
  }

  render() {
    return (
      <div>
        <img src={this.props.pokemonDetail.image_url} />
        <ul>
          <li>{this.props.pokemonDetail.name}</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
