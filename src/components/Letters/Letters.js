import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Letters.scss';

const Letters = (props) => {
  let letters = [...props.fetchedWord].map((letter, i) => {
    const isIncluded = props.guessedLetters.includes(letter.toUpperCase());
    return (
      <div className={styles.Letter} key={i}>
        <p className={!isIncluded ? styles.notFound : null}>{letter}</p>
      </div>
    );
  });

  return (
    <div className={styles.Letters}>
      {letters}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchedWord: state.fetchWordReducer.fetchedWord ? state.fetchWordReducer.fetchedWord : '',
    guessedLetters: state.gameReducer.guessedLetters
  };
};

Letters.propTypes = {
  fetchedWord: PropTypes.string,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps)(Letters);
