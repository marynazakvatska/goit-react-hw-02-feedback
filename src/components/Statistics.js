import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good:{good} </li>
    <li>Neutral:{neutral} </li>
    <li>Bad:{bad} </li>
    <li>Total:{(total = good + neutral + bad)}</li>
    <li>
      Positive feedback:{Math.round((good / (good + neutral + bad)) * 100)}%
    </li>
  </ul>
);

export default Statistics;
