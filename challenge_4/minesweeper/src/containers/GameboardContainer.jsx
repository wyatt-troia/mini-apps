import { connect } from "react-redux";
import { clickTile, resetGame } from "../actions/index.js";
import Gameboard from "../components/Gameboard.jsx";

const mapStateToProps = (state, ownProps) => {
  return {
    tiles: state.tiles,
    result: state.result
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (row, col) => {
      dispatch(clickTile(row, col));
    },
    resetGame: () => {
      dispatch(resetGame());
    }
  };
};

const GameboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gameboard);

export default GameboardContainer;
