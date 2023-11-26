import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
import Section from '../Section';
import { AppWrapper } from './App.styled';

export default class App extends Component {
  state = {
    marks: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };
  addMark = markId => {
    this.setState(prevState => ({
      marks: {
        ...prevState.marks,
        [markId]: prevState.marks[markId] + 1,
      },
    }));
  };
  countTotalFeedback = values => {
    return values.reduce((acc, value) => (acc += value), 0);
  };
  countPositiveFeedbackPercentage = (values, goods) => {
    if (!goods) {
      return '0%';
    }
    return ((goods / values) * 100).toFixed(2) + '%';
  };

  render() {
    const { marks } = this.state;

    const marksValues = Object.values(marks);
    const marksKeys = Object.keys(marks);
    const totalFeedback = this.countTotalFeedback(marksValues);
    const percentageOfPositive = this.countPositiveFeedbackPercentage(
      totalFeedback,
      marks.good
    );

    return (
      <AppWrapper>
        <Section title={'Please leave feedback'}>
          {
            <FeedbackOptions
              marksKeys={marksKeys}
              onLeaveFeedback={this.addMark}
            />
          }
        </Section>
        {totalFeedback === 0 ? (
          <Notification message="Here is no feedbacks" />
        ) : (
          <Section title={'Statistics'}>
            {
              <Statistics
                marksKeys={marksKeys}
                marksValues={marksValues}
                percentageOfPositive={percentageOfPositive}
                totalFeedback={totalFeedback}
              />
            }
          </Section>
        )}
      </AppWrapper>
    );
  }
}
