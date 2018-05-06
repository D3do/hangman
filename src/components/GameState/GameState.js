import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './GameState.scss';

class GameOver extends Component {
  onClick = () => {
    this.props.fetchWord();
    this.props.newGame();
  }

  render() {
    return (
      <div className={styles.GameState}>
        <h1>{this.props.gameWon ? "YOU'VE WON" : "GAME OVER"}</h1>
        <button onClick={this.onClick} autoFocus>NEW WORD</button>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    gameWon: state.gameReducer.gameWon,
    loading: state.fetchWordStart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWord: () => dispatch(actions.fetchWord()),
    newGame: () => dispatch(actions.newGame())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);
