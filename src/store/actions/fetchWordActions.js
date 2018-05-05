import * as actionTypes from './actionTypes';

export const fetchWordStart = () => {
  return {
    type: actionTypes.FETCH_WORD_START
  };
};

export const fetchWordError = () => {
  return {
    type: actionTypes.FETCH_WORD_ERROR
  };
};

export const fetchWordSuccess = word => {
  return {
    type: actionTypes.FETCH_WORD_SUCCESS,
    word: word
  };
};

export const fetchWord = () => {
  return dispatch => {
    dispatch(fetchWordStart());

    fetch('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=11&api_key=676d1333e4d75f2a7fa5c0d62da0bb62cbc52a4c35ae8fcb0')
      .then(response => response.json()
      .then(word => {
        dispatch(fetchWordSuccess(word.word))
      })
      .catch(error => {
        dispatch(fetchWordError(error));
      }));
  };
};
