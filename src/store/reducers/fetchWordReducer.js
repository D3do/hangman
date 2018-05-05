import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fetchWordStart: false,
  fetchWordError: false,
  fetchedWord: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_WORD_START:
      return {
        ...state,
        fetchWordStart: true
      };

      case actionTypes.FETCH_WORD_ERROR:
        return {
          ...state,
          fetchWordStart: false,
          fetchWordError: true
        }

      case actionTypes.FETCH_WORD_SUCCESS:
        return {
          ...state,
          fetchWordStart: false,
          fetchWordError: false,
          fetchedWord: action.word
        }

    default:
      return state;
  }
};

export default reducer;
