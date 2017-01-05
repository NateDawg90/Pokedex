import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokeId) => dispatch(requestSinglePokemon(pokeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
