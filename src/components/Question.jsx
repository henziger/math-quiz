import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import KaTeXComponent from './KaTeXComponent';

function Question({ question, answers, handleAnswerClick }) {
  return (
    <li className="question">
      <h2 className="question-title">
        <KaTeXComponent texExpression={question} />
      </h2>
      <ol className="question-answers">
        {answers.map((answer) => {
          return (
            <Answer
              key={answer.key}
              value={answer.key}
              answer={answer.text}
              handleAnswerClick={handleAnswerClick}
            />
          );
        })}
      </ol>
    </li>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
};

export default Question;
