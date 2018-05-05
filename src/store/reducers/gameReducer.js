import * as actionTypes from '../actions/actionTypes';

const initialState = {
  gameOver: false,
  gameWon: false,
  missedLetters: [],
  guessedLetters: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_GAME:
      return {
        ...state,
        gameOver: false,
        gameWon: false,
        missedLetters: [],
        guessedLetters: []
      };

    case actionTypes.ADD_MISSED_LETTER:
      return {
        ...state,
        missedLetters: [
          ...state.missedLetters,
          action.letter
        ]
      };

    case actionTypes.ADD_GUESSED_LETTER:
      return {
        ...state,
        guessedLetters: [
          ...state.guessedLetters,
          action.letter
        ]
      };

    case actionTypes.GAME_OVER:
      return {
        ...state,
        gameOver: action.gameOver,
        gameWon: action.gameWon
      };

    default:
      return state;
  }
};

export default reducer;
