import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = evt => {
    if (evt.target.name === 'good') setGood(prev => prev + 1);
    if (evt.target.name === 'neutral') setNeutral(prev => prev + 1);
    if (evt.target.name === 'bad') setBad(prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0);
  };

    return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions handleClick={handleClick} />
      </Section>

      {countTotalFeedback() === 0 && <Notification message="There is no feedback" />}

      {countTotalFeedback() > 0 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

