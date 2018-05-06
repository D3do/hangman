import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Hangman.scss';

class Hangman extends Component {
  state = {
    hangman: [
      styles.Gallows,
      styles.Head,
      styles.Neck,
      styles.Body,
      styles.RightArm,
      styles.LeftArm,
      styles.RightHand,
      styles.LeftHand,
      styles.RightLeg,
      styles.LeftLeg,
      styles.RightFoot,
      styles.LeftFoot
    ]
  }

  render() {
    const hangman = this.state.hangman.filter((hangmanClass, index) => index <= this.props.missedLettersLength)
      .map((value, index) => {
        return (
          <div key={index} className={value} />
        )
    });

    return (
      <div className={styles.Hangman}>
        {hangman}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    missedLettersLength: state.gameReducer.missedLetters.length
  };
};

export default connect(mapStateToProps)(Hangman);
