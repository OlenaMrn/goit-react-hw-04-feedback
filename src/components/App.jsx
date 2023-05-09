// import FeedbackCounter from "./FeedbackCounter/feedbackCounter";
import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (evt) => {
    if (evt.target.name === 'good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    } else if (evt.target.name === 'bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    } else {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }      
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;

  }


  countPositiveFeedbackPercentage = () => {
  const { good, neutral, bad } = this.state;
    const total = Math.round((good * 100) / (good + neutral + bad));
    
    return total > 0 ? total : 0;
}


  render() {
   const { good, neutral, bad } = this.state;
    
    return (
      <div>
          <Section title="Please leave your feedback">
          <FeedbackOptions handleClick={this.handleClick} />
        </Section>

        {this.countTotalFeedback() === 0 && <Notification message = "There is no feedback" />}

        {this.countTotalFeedback()> 0 && <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>}
        
      </div>
    );
  }
}


