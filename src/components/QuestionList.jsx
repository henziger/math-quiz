import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

function QuestionList({ questions, handleAnswerClick }) {
  return (
    <div className="question-list">
      {questions.map((question) => {
        return (
          <Question
            key={question.key}
            question={question.question}
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
};

export default QuestionList;
