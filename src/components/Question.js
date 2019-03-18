import React  from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Question = ({ question, answers, handleAnswerClick }) => {
  return (
    <li className="question">
      <h2 className="question-title">
        {question}
      </h2>
      <ol className="question-answers">
        {answers.map(answer => {
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
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Question;
