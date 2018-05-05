import * as actionTypes from './actionTypes';

export const newGame = () => {
  return {
    type: actionTypes.NEW_GAME
  };
};

export const addMissedLetter = letter => {
  return {
    type: actionTypes.ADD_MISSED_LETTER,
    letter: letter
  };
};

export const addGuessedLetter = letter => {
  return {
    type: actionTypes.ADD_GUESSED_LETTER,
    letter: letter
  };
};

export const gameOver = (gameOver, gameWon) => {
  return {
    type: actionTypes.GAME_OVER,
    gameOver: gameOver,
    gameWon: gameWon
  };
};
