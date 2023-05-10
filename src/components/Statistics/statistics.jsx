
import React from 'react';

import PropTypes from 'prop-types';
import styles from './statistics.module.css'


export function Statistics ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) {
    return (
      <div>
        <div className={styles.statswrap}>
          <p className={styles.stats}>Good: {good}</p>
          <p className={styles.stats}>Neutral: {neutral}</p>
          <p className={styles.stats}>Bad: {bad}</p>
        </div>

        <p>Total: {countTotalFeedback}</p>
        <p>Positive Feedback: {countPositiveFeedbackPercentage}%</p>
      </div>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};


