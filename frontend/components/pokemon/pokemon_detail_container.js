import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => {
  return {pokemonDetail: state.pokemonDetail};
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (x) => dispatch(requestSinglePokemon(x))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
