import React from 'react';
import PropTypes from 'prop-types';
import KaTeXComponent from './KaTeXComponent';

function Answer({ answer, value, handleAnswerClick }) {
  return (
    <li
      className="question-answer"
      onClick={handleAnswerClick.bind(this, value)}
    >
      <KaTeXComponent texExpression={answer} />
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
};

export default Answer;
