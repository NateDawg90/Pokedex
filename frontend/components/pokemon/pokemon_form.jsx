import React from 'react';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
];

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      poke_type: "",
      attack: 0,
      defense: 0,
      moves: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const poke = Object.assign({}, this.state);
    poke["attack"] = parseInt(poke["attack"]);
    poke["defense"] = parseInt(poke["defense"]);
    let nestedPoke = {"pokemon" : poke };

    this.props.createPokemon(nestedPoke)
      .then(() => this.setState({
        name: "",
        image_url: "",
        poke_type: "",
        attack: 0,
        defense: 0,
        moves: []
      }));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value});
  }

  render() {
    let types = TYPES.map(type => (
      <option value={type}>{type}</option>
    ));

    return (
      <form className="poke-form" onSubmit={ this.handleSubmit }>
        <label>Name:
          <input ref="name" value={ this.state.name } onChange={ this.update('name') } />
        </label>
        <label>Image URL:
          <input ref="image_url" value={ this.state.image_url } onChange={ this.update('image_url') } />
        </label>
        <label>Type:
          <select ref="poke_type" value={ this.state.poke_type } onChange={ this.update('poke_type') }>{types}</select>
        </label>
        <label>Attack:
          <input ref="attack" value={ this.state.attack } onChange={ this.update('attack') } />
        </label>
        <label>Defense:
          <input ref="defense" value={ this.state.defense } onChange={ this.update('defense') } />
        </label>

        <button>Create Pokemon!</button>
      </form>
    );
  }
}

export default PokemonForm;
