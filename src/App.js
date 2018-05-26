import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Letters from './components/Letters/Letters';
import GameState from './components/GameState/GameState';
import Hangman from './components/Hangman/Hangman';
import MissedLetters from './components/MissedLetters/MissedLetters';
import * as actions from './store/actions/index';
import styles from './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchWord();

    window.addEventListener('keypress', (event) => {
      !this.props.isGameOver && this.checkLetter(event.key.toUpperCase());
    });
  };

  checkLetter = (pressedKey) => {
    if(this.props.fetchedWord.includes(pressedKey)) {
      if(this.props.guessedLetters.includes(pressedKey) ||
        this.props.missedLetters.includes(pressedKey)) {
      } else if (!this.props.guessedLetters.includes(pressedKey)) {
        [...this.props.fetchedWord].forEach(letter => {
          if(letter === pressedKey) {
            this.props.addGuessedLetter(pressedKey);
          }
        });
      }
    } else if (!this.props.fetchedWord.includes(pressedKey) && !this.props.missedLetters.includes(pressedKey)) {
      this.props.addMissedLetter(pressedKey);
    }

    this.hasPlayerWon();
  };

  hasPlayerWon = () => {
    if(this.props.missedLetters.length > 10) {
      this.props.gameFinished(true, false);
    } else if (this.props.guessedLetters.length === this.props.fetchedWord.length) {
      this.props.gameFinished(true, true);
    }
  };

  render() {
    return (
      <div className={styles.App}>
        {this.props.isGameOver ? <GameState /> : null}
        {this.informUser}
        <Hangman />
        <MissedLetters />
        <div className='repeatedLetter'></div>
        <Letters />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchedWord: state.fetchWordReducer.fetchedWord ? state.fetchWordReducer.fetchedWord.toUpperCase() : '',
    isGameOver: state.gameReducer.gameOver,
    missedLetters: state.gameReducer.missedLetters ? state.gameReducer.missedLetters.join('').toUpperCase() : '',
    guessedLetters: state.gameReducer.guessedLetters ? state.gameReducer.guessedLetters.join('').toUpperCase() : ''
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWord: () => dispatch(actions.fetchWord()),
    addMissedLetter: (letter) => dispatch(actions.addMissedLetter(letter)),
    addGuessedLetter: (letter) => dispatch(actions.addGuessedLetter(letter)),
    gameFinished: (gameOver, isGameWon) => dispatch(actions.gameOver(gameOver, isGameWon))
  }
};

App.propTypes = {
  fetchedWord: PropTypes.string,
  isGameOver: PropTypes.bool,
  missedLetters: PropTypes.string,
  guessedLetters: PropTypes.string,
  fetchWord: PropTypes.func,
  addMissedLetter: PropTypes.func,
  addGuessedLetter: PropTypes.func,
  gameFinished: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
