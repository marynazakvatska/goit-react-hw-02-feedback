import React from "react";
import s from "./FeedBackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btns = Object.keys(options);
  return (
    <div>
      {btns.map((btn, index) => (
        <button
          className={s.btn}
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
