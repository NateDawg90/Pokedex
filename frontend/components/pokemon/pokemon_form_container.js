import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createPokemon } from '../../actions/pokemon_actions';

const mapDispatchToProps = dispatch => ({
  createPokemon: (pokeInfo) => dispatch(createPokemon(pokeInfo))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
