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
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      key: PropTypes.string,
      category: PropTypes.string,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          key: PropTypes.string,
        })
      ),
      correct: PropTypes.number,
    })
  ).isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
};

export default QuestionList;
