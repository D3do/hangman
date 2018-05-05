import React from 'react';
import { connect } from 'react-redux';
import styles from './MissedLetters.scss';

const MissedLetters = (props) => {
  let letters = [...props.missedLetters].map((letter, i) =>
    <span key={i}>{letter}</span>
  )

  return (
    <div className={styles.MissedLetters}>
      <p>YOU MISSED:</p>
      <div className={styles.MissedLetter}>{letters}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    missedLetters: state.gameReducer.missedLetters ? state.gameReducer.missedLetters : null
  }
}

export default connect(mapStateToProps)(MissedLetters);
