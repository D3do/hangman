import React, { Component } from 'react';
// import { connect } from 'react-redux';
import styles from './Hangman.scss';

class Hangman extends Component {
  state = {
    hangman: [
      'gallows',
      'head',
      'neck',
      'body',
      'right-arm',
      'left-arm',
      'right-hand',
      'left-hand',
      'right-leg',
      'left-leg',
      'right-foot',
      'left-foot'
    ]
  }

  render() {
    return(
      <div className={styles.Hangman}>
        <div className={styles.Gallows}></div>
        <div className={styles.Head}></div>
        <div className={styles.Neck}></div>
        <div className={styles.Body}></div>
        <div className={styles.rightArm}></div>
        <div className={styles.leftArm}></div>
        <div className={styles.rightHand}></div>
        <div className={styles.leftHand}></div>
        <div className={styles.rightLeg}></div>
        <div className={styles.leftLeg}></div>
        <div className={styles.rightFoot}></div>
        <div className={styles.leftFoot}></div>
      </div>
    );
  }
}

export default Hangman;
