import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      (!this.props.gameOver) && this.checkLetter(event.key.toUpperCase());
    });
  };

  checkLetter = (pressedKey) => {
    if(this.props.fetchedWord.includes(pressedKey)) {
      if(this.props.guessedLetters.includes(pressedKey) ||
         this.props.missedLetters.includes(pressedKey)) {
        console.log('try different letter');
      } else if (!this.props.guessedLetters.includes(pressedKey)) {
        this.props.addGuessedLetter(pressedKey);
      }
    } else if (!this.props.fetchedWord.includes(pressedKey)) {
      if(!this.props.missedLetters.includes(pressedKey)) {
        this.props.addMissedLetter(pressedKey);
      }
    }

    this.hasPlayerWon();
  };

  hasPlayerWon = () => {
    if(this.props.missedLetters.length > 11) {
      this.props.gameFinished(true, false);
    }
  }

  render() {
    return (
      <div className={styles.App}>
        {this.props.isGameOver ? <GameState /> : null}
        <Hangman />
        <MissedLetters />
        <Letters />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.fetchWordReducer.fetchWordStart,
    fetchedWord: state.fetchWordReducer.fetchedWord ? state.fetchWordReducer.fetchedWord.toUpperCase() : '',
    isGameOver: state.gameReducer.gameOver,
    gameWon: state.gameReducer.gameWon,
    missedLetters: state.gameReducer.missedLetters ? state.gameReducer.missedLetters.join('').toUpperCase() : '',
    guessedLetters: state.gameReducer.guessedLetters ? state.gameReducer.guessedLetters.join('').toUpperCase() : ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWord: () => dispatch(actions.fetchWord()),
    addMissedLetter: (letter) => dispatch(actions.addMissedLetter(letter)),
    addGuessedLetter: (letter) => dispatch(actions.addGuessedLetter(letter)),
    gameFinished: (gameOver, isGameWon) => dispatch(actions.gameOver(gameOver, isGameWon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
