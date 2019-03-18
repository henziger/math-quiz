import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer, value, handleAnswerClick }) => {
  return (
    <li
      className="question-answer"
      onClick={handleAnswerClick.bind(this, value)}>
        {answer}
    </li>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Answer;
