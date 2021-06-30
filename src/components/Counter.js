import React from "react";
/* import css from './Counter.module.css' */
import Buttons from "./Buttons";
import Statistics from "./Statistics";

class Counter extends React.Component {
  /*   static defaultProps = {
    initialValue: 0,
}
    static PropTypes = {
         name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.string.isRequired,
    }  */

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodInc = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  neutralInc = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badInc = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.goodInc + this.neutralInc + this.badInc;
  };
  /*  
    countPositiveFeedbackPercentage()
     */

  render() {
    return (
      <div>
        <h1 className="Title">Please leave feedback</h1>
        <Buttons
          onGoodInc={this.goodInc}
          onNeutralInc={this.neutralInc}
          onBadInc={this.badInc}
        />

        <h2>Statistic</h2>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
        />
        {/* <ul>
            <li>Good:{this.state.good} </li>
            <li>Neutral:{this.state.neutral} </li>
             <li>Bad:{this.state.bad} </li>
        </ul> */}
      </div>
    );
  }
}

export default Counter;
