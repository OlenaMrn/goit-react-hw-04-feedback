import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ handleClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        name="good"
        className={styles.button}
      >
        Good
      </button>
      <button
        type="button"
        onClick={handleClick}
        name="neutral"
        className={styles.button}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={handleClick}
        name="bad"
        className={styles.button}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.prototype = {
  handleClick: PropTypes.func.isRequired,
};

